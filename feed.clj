#!/usr/bin/env bb

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath ".")
(require '[clojure.java.shell :refer [sh]]
         '[tools.generate     :as    gen]
         '[tools.time         :as    time]
         '[site.blog.clg      :as    clg]
         '[site.blog.rain     :as    rain]
         '[site.blog.bb       :as    bb])


(defn post-feed [{:keys [title link category published updated content]}]
  [:entry
   [:title     title]
   [:link      {:href link}]
   [:id        link]
   [:category  {:term category}]
   [:content   {:type "text"} content]
   [:published published]
   [:updated   updated]])


(defn blog-feed []
  (str "<?xml version='1.0' encoding='UTF-8'?>\n"
       (gen/xml
        [:feed {:xmlns "http://www.w3.org/2005/Atom"}
         [:id "tag:mxmmz.nl,2020-07-19:Tinus"]
         [:link
          {:href "https://www.mxmmz.nl/feed/feed.xml"
           :rel  "self"
           :type "application/atom+xml"}]
         [:title "MxMMz"]
         [:link {:href "https://www.mxmmz.nl"}]
         [:updated (time/datetimestr)]
         [:author
          [:name "Maarten Metz"]]

         (post-feed clg/meta-data)
         (post-feed rain/meta-data)
         (post-feed bb/meta-data)

         ])))


;; This feed generation is not part of the site generation flow on purpose;
;; I want to separate them and only publish a new feed when I'm happy with
;; a new blog post (which may take some publish iterations).
;; Therefore, the updated time tag can be generated (see blog-feed function)
;; https://validator.w3.org/feed/docs/rfc4287.html#element.updated
;; Furthermore, given that use case, it's safe to assume the publish directory
;; already exists.
(do
  ;; Assumes publish directory exists
  (sh "rm" "-rf" "publish/feed/")
  (sh "mkdir" "publish/feed")

  (spit "publish/feed/feed.xml" (blog-feed)))
