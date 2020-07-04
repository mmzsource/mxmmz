(ns site.blog)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])

(defn body []
  [:body
   [:h1 {:class "center"} "Posts"]
   [:p {:class "center"}
    (html/a "./blog/clojure-learning-guide.html"
            "Clojure(Script) Learning Guide")
    [:br]
    (html/a "./blog/matrix-rain-in-clojurescript.html"
            "Matrix Rain in ClojureScript")]])
