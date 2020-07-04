(ns site.blog.rain)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])


(defn intro []
  [:div
   [:h1 "Matrix Rain in Clojurescript"]

   [:p
    "Already done many times before, in many other languages, but I just had to
    scratch my geek itch ¯\\_(ツ)_/¯"]

   [:canvas {:id "matrixrain"}]
   [:script {:src "matrixrain-js/main.js"}]

   [:p "The source code can be found "
    (html/a "https://github.com/mmzsource/matrixrain/blob/master/src/matrixrain/core.cljs" "here.")]

   [:p "Detailed explanation of the source code will follow soon in this post."]])


(defn body []
  (reduce conj [:body ]
   [(intro)]))
