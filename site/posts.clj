(ns site.posts)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])

(defn body []
  [:body
   [:h1 "Posts"]
   (html/ul
    [(html/a
      "./posts/clojure-learning-guide.html"
      "Clojure(Script) Learning Guide")])])
