(ns garden-css-modules.core-test
  (:require [clojure.test :refer [deftest are is testing]]
            [garden-css-modules.core :as sut]))

(deftest modularize
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
          (is (= names {:foo ".foo__garden-css-modules_core"}))
          (is (= styles [:.foo__garden-css-modules_core {:color 'red}]))))

      (testing "tag name classed"
        (let [{:keys [names styles]}
              (sut/modularize [:a.foo {:color 'red}])]
          (is (= names {:foo ".foo__garden-css-modules_core"}))
          (is (= styles [:a.foo__garden-css-modules_core {:color 'red}]))))

      (testing "tag name with attribute selector classed"
        (let [{:keys [names styles]}
              (sut/modularize ["a[href=\"bar\"].foo" {:color 'red}])]
          (is (= names {:foo ".foo__garden-css-modules_core"}))
          (is (= styles
                 [(keyword "a[href=\"bar\"].foo__garden-css-modules_core")
                  {:color 'red}]))))

      (testing "nested"
        (let [{:keys [names styles]}
              (sut/modularize [:.parent {:color 'red}
                                [:.child {:color 'blue}
                                  [:.grandchild {:color 'green}]]])]
          (is (= names {:parent ".parent__garden-css-modules_core"
                        :child  ".child__garden-css-modules_core"
                        :grandchild  ".grandchild__garden-css-modules_core"}))
          (is (= styles [:.parent__garden-css-modules_core {:color 'red}
                          [:.child__garden-css-modules_core {:color 'blue}
                            [:.grandchild__garden-css-modules_core {:color 'green}]]]))))

      (testing "sibling selector"
       (let [{:keys [names styles]}
             (sut/modularize [".foo + .bar" {:background-color 'yellow}])]
         (is (= names {:foo ".foo__garden-css-modules_core"
                       :bar  ".bar__garden-css-modules_core"}))
         (is (= styles
                [(keyword (str ".foo__garden-css-modules_core"
                               " + "
                               ".bar__garden-css-modules_core"))
                 {:background-color 'yellow}]))))

      (testing "direct descendent selector"
       (let [{:keys [names styles]}
             (sut/modularize [".foo > .bar" {:background-color 'yellow}])]
         (is (= names {:foo ".foo__garden-css-modules_core"
                       :bar  ".bar__garden-css-modules_core"}))
         (is (= styles
                [(keyword (str ".foo__garden-css-modules_core"
                               " > "
                               ".bar__garden-css-modules_core"))
                 {:background-color 'yellow}]))))

      (testing "combined class names"
        (let [{:keys [names styles]}
              (sut/modularize [:.foo.bar {:color 'red}])]
          (is (= names {:foo ".foo__garden-css-modules_core"
                        :bar  ".bar__garden-css-modules_core"}))
          (is (= styles [:.foo__garden-css-modules_core.bar__garden-css-modules_core
                         {:color 'red}]))))

     (testing "class names with pseudo-classes"
       (let [{:keys [names styles]}
             (sut/modularize [:.foo:hover {:color 'red}])]
         (is (= names {:foo ".foo__garden-css-modules_core"}))
         (is (= styles [:.foo__garden-css-modules_core:hover {:color 'red}])))))))

(deftest defstyle
  (testing "declares symbol to be result of calling modularise in clojure mode"
    (sut/defstyle test-style [:.foo {:color 'red}])
    (is (= (test-style :names) {:foo ".foo__garden-css-modules_core"}))
    (is (= (test-style :styles)
           [:.foo__garden-css-modules_core {:color 'red}]))))

  ;; TODO: Assert that modularize is called using with-redefs
