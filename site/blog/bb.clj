(ns site.blog.bb)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])


(defn intro []
  [:div
   [:h1 "Build a website using only Babashka"]

   [:p "After some experience creating blogposts with wordpress, gatsby,
   multiple markdown templating engines, etc. I felt like it should be easier,
   more robust and more maintainable to create something simple like a website."]

   [:p "When I want to write a blogpost, I want to write a blogpost and I don't
   want to 'negotiate' with broken dependencies, unclear or non-existent
   documentation, spinning up containers, or supposedly super simple config
   files or dsls, that give me more headaches than joy in practice."]

   [:div {:class "imgtxt-container"}
    [:img {:class "container-svg"
           :src   "./babashka-img/babashka.svg"
           :alt   "babashka logo"}]
    [:div {:class "container-txt"}

     [:h2 "Enter Babashka"]
     [:p "In essence, "
      (html/a "https://github.com/borkdude/babashka" "Babashka")
      " is a tiny Clojure interpreter for shell scripting. By compiling to a
      native binary using "
      (html/a "https://www.graalvm.org" "GraalVM,")
      " the infamous JVM startup times are GONE which makes the possibility of
     using Clojure on the commandline a lot more attractive for a lot of Clojure
     enthusiasts."]

     [:p "I had been happily using Babashka for some quick and dirty shell
     scripting when suddenly an idea struck: what if I could make a website with
     babashka as only dependency? After all: installing and updating babashka
     is very easy and it's available on all platforms."]]]])


(defn body []
  (reduce conj [:body ]
   [(intro)]))
