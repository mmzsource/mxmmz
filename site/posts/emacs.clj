(ns site.posts.emacs)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])

(defn body []
  [:body
   [:h1 "Emacs Learning Guide"]

   [:p
    "WIP: links to get started with Emacs."]])
