(ns site.blog)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.generate :as gen])

(defn body []
  [:body
   [:h1 {:class "center"} "Posts"]
   [:p {:class "center"}
    (gen/a "./blog/clojure-learning-guide.html"
           "Clojure(Script) Learning Guide")
    [:br]
    (gen/a "./blog/matrix-rain-in-clojurescript.html"
           "Matrix Rain in ClojureScript")
    [:br]
    (gen/a "./blog/building-a-website-with-babashka.html"
           "Building a website with Babashka")]])
