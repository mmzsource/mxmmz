#!/usr/bin/env bb

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath ".")

(require '[clojure.java.shell :refer [sh]]
         '[tools.html         :as    html]
         '[tools.time         :as    time])

(def valid-tags [:clojure])

(defn post-feed [post-map]
  "bla")

(defn blog-feed []
  (str "<?xml version='1.0' encoding='UTF-8'?>\n"
       (html/html
        [:feed {:xmlns "http://www.w3.org/2005/Atom"}
         [:id "tag:mxmmz.nl,2020-07-19:Tinus"]
         [:link
          {:href "https://www.mxmmz.nl/feed/feed.xml"
           :rel  "self"
           :type "application/atom+xml"}]
         [:title "***TESTING*** M-x MMz Feed"]
         [:link {:href "https://www.mxmmz.nl"}]
         [:updated (time/datetimestr)]
         [:author
          [:name "Maarten Metz"]]])))

(do
  ;; Assumes publish directory exists
  (sh "rm" "-rf" "publish/feed/")
  (sh "mkdir" "publish/feed")

  (spit "publish/feed/feed.xml" (blog-feed)))
