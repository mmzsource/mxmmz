#!/usr/bin/env bb

(require '[babashka.classpath :refer [add-classpath]])
(add-classpath ".")

(require '[clojure.java.shell :refer [sh]]
         '[clojure.java.io    :as io]
         '[site.index         :as idx]
         '[site.blog          :as blog]
         '[site.about         :as about]
         '[site.blog.clg      :as clg]
         '[site.blog.rain     :as rain]
         '[site.blog.bb       :as bb]
         '[tools.html         :as html])


;;;;;;;;;;;;;;;;;;;;;;;;;;
;; STANDARD PAGE ITEMS  ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn head [{:keys [title path2root]}]
  [:head
   [:title title]
   [:meta {:charset "utf-8"}]
   [:link {:rel "stylesheet" :href (str path2root "/remedy.css")}]
   [:link {:rel "stylesheet" :href (str path2root "/styles.css")}]])


(defn header [{:keys [path2root]}]
  [:header
   [:a {:class "mxmmz"
        :href (str path2root "/about.html")}
    [:span "M"]
    [:span {:class "hide"} "-"]
    [:span "x"]
    [:span {:class "spaceleft"} "MM"]
    [:span {:class "subscript"} "z"]]])


(defn nav [{:keys [path2root]}]
  [:nav
   [:p
    (html/a (str path2root "/index.html") "Home")
    (html/a (str path2root "/blog.html")  "Blog")
    (html/a (str path2root "/about.html") "About")]
   [:hr]])


(def footer
  [:footer
   [:hr]
   [:p
    (html/a "https://github.com/mmzsource" "Github")
    (html/a "https://www.linkedin.com/in/maartenmetz/" "LinkedIn")
    (html/a "https://twitter.com/mmz_" "Twitter")]])


;; left sidebar (used on large screen)
(def sidel
  [:div {:class "sidel"}])


;; right sidebar (used on large screens)
(def sider
  [:div {:class "sider"}])


;;;;;;;;;;;;;;;;;;;;
;; CONSTRUCT PAGE ;;
;;;;;;;;;;;;;;;;;;;;


(defn wrap [body m]
  (str "<!DOCTYPE html>\n"
       (html/html [:html
                   (head m)
                   (header m)
                   (nav m)
                   sidel
                   [:main body]
                   sider
                   footer])))


;;;;;;;;;;;;;
;; PUBLISH ;;
;;;;;;;;;;;;;


;; Do NOT remove the publish directory.
;; It contains the .git info for the gh-pages branch
;; and the CNAME file
(defn prepare-publish-directories! []
  (when (.exists (io/file "publish"))
    (sh "rm" "publish/index.html" "publish/blog.html" "publish/about.html")
    (sh "rm" "publish/remedy.css" "publish/styles.css")
    (sh "rm" "-rf" "publish/blog")
    (sh "mkdir" "-p" "publish/blog/matrixrain-img/")
    (sh "mkdir" "-p" "publish/blog/babashka-img/")))


(defn copy-css! []
  (sh "cp" "site/remedy.css" "publish/remedy.css")
  (sh "cp" "site/styles.css" "publish/styles.css"))


(defn publish-main-pages! []
  (let [index (wrap (idx/body)   {:title "MxMMz Home" :path2root "."})
        blog  (wrap (blog/body)  {:title "Blog"       :path2root "."})
        about (wrap (about/body) {:title "About"      :path2root "."})]
    (spit "publish/index.html" index)
    (spit "publish/blog.html"  blog)
    (spit "publish/about.html" about)))


(defn publish-blog-pages! []
  (let [clg  (wrap (clg/body)
                   {:title "Clojure Learning Guide"
                    :path2root ".."})
        rain (wrap (rain/body)
                   {:title "Matrix Rain"
                    :path2root ".."})
        bb   (wrap (bb/body)
                   {:title "Building a Website with Babashka"
                    :path2root ".."})]
    (spit "publish/blog/clojure-learning-guide.html" clg)

    ; Spit MatrixRain Page (includes generated js)
    (sh "cp" "-r" "site/blog/matrixrain-js" "publish/blog/")
    (sh "cp" "site/blog/matrixrain-img/matrix.png" "publish/blog/matrixrain-img/")
    (sh "cp" "site/blog/matrixrain-img/raindrop-short.png" "publish/blog/matrixrain-img/")
    (spit "publish/blog/matrix-rain-in-clojurescript.html" rain)

    ; Spit babashka page
    (sh "cp" "site/blog/babashka-img/babashka.svg" "publish/blog/babashka-img/")
    (sh "cp" "site/blog/babashka-img/dependencies-tweet-gary-bernhardt.png" "publish/blog/babashka-img/")
    (sh "cp" "site/blog/babashka-img/mxmmz-tree.png" "publish/blog/babashka-img/")
    (spit "publish/blog/building-a-website-with-babashka.html" bb)))

(do
  (prepare-publish-directories!)
  (copy-css!)
  (publish-main-pages!)
  (publish-blog-pages!))
