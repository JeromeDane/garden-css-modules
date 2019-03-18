(ns garden-css-modules.core-test
  (:require [clojure.test :refer [deftest are is testing]]
            [garden-css-modules.core :as sut]))

(deftest modularize
  (with-redefs [hash (fn [_] "hash")]
    (testing "modularize"
      (testing "returns a map with :names and :styles keys"
        (let [{:keys [names styles]}
              (sut/modularize [:div])]
          (is (vector? styles))
          (is (map? names))))

      (testing "combines multiple arguments into styles"
        (let [{:keys [styles]}
              (sut/modularize [:div] [:div])]
          (is (= 2 (count styles)))))

      (testing "converts selectors to keywords"
        (let [{:keys [styles]}
              (sut/modularize ["div" {:color 'red}])]
          (is (= styles [:div {:color 'red}]))))

      (testing "ignores"
        (testing "dom elements"
          (let [{:keys [names styles]}
                (sut/modularize [:div {:display 'inline}])]
            (is (= names {}))
            (is (= styles [:div {:display 'inline}]))))

        (testing "dom elements with attribute selector"
          (let [{:keys [names styles]}
                (sut/modularize ["a[href=\"bar\"]" {:color 'red}])]
            (is (= names {}))
            (is (= styles [(keyword "a[href=\"bar\"]") {:color 'red}]))))

        (testing "IDs"
          (let [{:keys [names styles]}
                (sut/modularize [:#red {:color 'red}])]
            (is (= names {}))
            (is (= styles [:#red {:color 'red}]))))

        (testing "pseudo-classes"
          (let [{:keys [names styles]}
                (sut/modularize [:a [:&:hover {:color 'red}]])]
            (is (= names {}))
            (is (= styles [:a [:&:hover {:color 'red}]])))))

      (testing "hashes class names"
        (testing "simple"
          (let [{:keys [names styles]}
                (sut/modularize [:.foo {:color 'red}])]
            (is (= names {:foo "foo__user-hash"}))
            (is (= styles [:.foo__user-hash {:color 'red}]))))

        (testing "tag name classed"
          (let [{:keys [names styles]}
                (sut/modularize [:a.foo {:color 'red}])]
            (is (= names {:foo "foo__user-hash"}))
            (is (= styles [:a.foo__user-hash {:color 'red}]))))

        (testing "tag name with attribute selector classed"
          (let [{:keys [names styles]}
                (sut/modularize ["a[href=\"bar\"].foo" {:color 'red}])]
            (is (= names {:foo "foo__user-hash"}))
            (is (= styles
                   [(keyword "a[href=\"bar\"].foo__user-hash")
                    {:color 'red}]))))

        (testing "nested"
          (let [{:keys [names styles]}
                (sut/modularize [:.parent {:color 'red}
                                  [:.child {:color 'blue}
                                    [:.grandchild {:color 'green}]]])]
            (is (= names {:parent "parent__user-hash"
                          :child  "child__user-hash"
                          :grandchild  "grandchild__user-hash"}))
            (is (= styles [:.parent__user-hash {:color 'red}
                            [:.child__user-hash {:color 'blue}
                              [:.grandchild__user-hash {:color 'green}]]]))))

        (testing "sibling selector"
         (let [{:keys [names styles]}
               (sut/modularize [".foo + .bar" {:background-color 'yellow}])]
           (is (= names {:foo "foo__user-hash"
                         :bar "bar__user-hash"}))
           (is (= styles
                  [(keyword (str ".foo__user-hash"
                                 " + "
                                 ".bar__user-hash"))
                   {:background-color 'yellow}]))))

        (testing "direct descendent selector"
         (let [{:keys [names styles]}
               (sut/modularize [".foo > .bar" {:background-color 'yellow}])]
           (is (= names {:foo "foo__user-hash"
                         :bar "bar__user-hash"}))
           (is (= styles
                  [(keyword (str ".foo__user-hash"
                                 " > "
                                 ".bar__user-hash"))
                   {:background-color 'yellow}]))))

        (testing "combined class names"
          (let [{:keys [names styles]}
                (sut/modularize [:.foo.bar {:color 'red}])]
            (is (= names {:foo "foo__user-hash"
                          :bar "bar__user-hash"}))
            (is (= styles [:.foo__user-hash.bar__user-hash
                           {:color 'red}]))))

       (testing "concatenation operator"
         (let [{:keys [names styles]}
               (sut/modularize [:div [:&.foo {:color 'red}]])]
           (is (= names {:foo "foo__user-hash"}))
           (is (= styles [:div [:&.foo__user-hash {:color 'red}]]))))

       (testing "class names with pseudo-classes"
         (let [{:keys [names styles]}
               (sut/modularize [:.foo:hover {:color 'red}])]
           (is (= names {:foo "foo__user-hash"}))
           (is (= styles [:.foo__user-hash:hover {:color 'red}]))))

       (testing "handles multiple arguments"
         (let [{:keys [names styles]}
               (sut/modularize [:.foo {:color 'red}] [:.bar {:color 'blue}])]
          (is (= names {:foo "foo__user-hash"
                        :bar "bar__user-hash"}))
          (is (= styles [[:.foo__user-hash {:color 'red}]
                         [:.bar__user-hash {:color 'blue}]]))))))))


(deftest defstyle ; Note: with-redefs does not work for macros, so we have to use native hash
  (testing "declares symbol to be result of calling modularise in clojure mode"
    (sut/defstyle test-style [:.foo {:color 'red}])
    (is (= (test-style :names) {:foo "foo__garden-css-modules_core-test--1989040958"}))
    (is (= (test-style :styles)
           [:.foo__garden-css-modules_core-test--1989040958 {:color 'red}]))))

  ;; TODO: Assert that modularize is called using with-redefs
