(ns site.index)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])

(defn body []
  [:body
   [:h1 "Welcome to MxMMz"]
   [:h2 "Posts"]
   (html/ul [(html/a "./posts/clojure-learning-guide.html" "Clojure Learning Guide")])])
