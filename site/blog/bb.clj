(ns site.blog.bb)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])


(defn intro []
  [:div
   [:h1 "Build a website using only Babashka"]

   [:p "After some experience creating blogposts with wordpress, gatsby,
   multiple markdown templating engines, etc. I felt it should be easier, more
   robust and more maintainable to create something simple like a website."]

   [:img {:src "./babashka-img/dependencies-tweet-gary-bernhardt.png"
          :alt "Dependency Hell"}]

   [:p "When I want to write a blogpost ... I want to write a blogpost! I don't
   want to 'negotiate' with broken dependencies, unclear or non-existent
   documentation, spinning up containers, or supposedly simple config files."]])

(defn babashka []
  [:div
   [:div {:class "imgtxt-container"}
    [:img {:class "container-svg"
           :src   "./babashka-img/babashka.svg"
           :alt   "babashka logo"}]
    [:div {:class "container-txt"}

     [:h2 "Enter Babashka"]
     [:p "In essence, "
      (html/a "https://github.com/borkdude/babashka" "Babashka")
      "is a tiny Clojure interpreter tuned for shell scripting. By compiling to
      a native binary using"
      (html/a "https://www.graalvm.org" "GraalVM,")
      "the infamous JVM startup times are GONE which makes the possibility of
     using Clojure on the commandline a lot more attractive for a lot of Clojure
     enthusiasts."]

     [:p "I had been happily using Babashka for some quick and dirty shell
     scripting when suddenly an idea struck: what if I could make a website with
     babashka as only dependency? After all: installing and updating babashka
     is very easy and it's available on all platforms."]]]])

(defn design []
  [:div
   [:div {:class "imgtxt-container"}
    [:img {:class "container-img"
           :src   "./babashka-img/mxmmz-tree.png"
           :alt   "File organisation"}]
    [:div {:class "container-txt"}

     [:h2 "Design"]

     [:p "The source code for my website can be found"
      (html/a "https://github.com/mmzsource/mxmmz" "here.")
      "The directory listing already tells a lot about my development setup
      for this website."]

     [:p "The" [:strong "site"] "folder contains my website pages as clojure files, using
        the" (html/a "https://github.com/weavejester/hiccup" "hiccup")
       "format. It also contains plain css files."]
      [:p [:strong "gen.clj"] "is a babashka executable that generates the html
        files from the clojure files. It puts those html files together with the
        CSS files in the" [:strong "publish"] "folder."]
      [:p "To publish, you just" [:strong "./gen.clj"] "that website into existence and
        push everyting in the" [:strong "publish"] "folder to your hosting provider."]]]])

(defn bells-and-whistles []
  [:div
   [:h2 "Bells and whistles"]

   [:p "That's all folks! That's all you need to build a website. You could even
      go more spartan and simply write the html yourself. That's a bit too
      bare-bones for me. I like an occasional helper function when it's needed.
      These helper functions are located in the" [:strong "tools"] "folder."]

   [:p "Furthermore, I got tired of refreshing my browser after updating a
      blogpost file in my editor, so I decided to create a" [:strong "dev.clj"]
      "babashka executable. It monitors my folders, runs the" [:strong "gen.clj"]
      "script when it detects changes and then opens the refreshed page for me. It
      comes with the cost of an additional babashka dependency: the "
      (html/a "https://github.com/babashka/pod-babashka-filewatcher" "filewatcher
      pod.") "For me that's worth it."] ])

(defn conclusion []
  [:div
   [:h2 "Conclusion"]

   [:p "Although it's not perfect (yet!) I like this setup. It's all there in
   plain sight for me to adapt to my wishes."]

   [:p "I'd like to thank"
    (html/a "https://twitter.com/borkdude" "Michiel Borkent")
    "for his awesome"
    (html/a "https://github.com/borkdude/babashka" "babashka")
    "tool and for helping me getting this setup up-and-running. Building a
    website in Clojure has ever been easier (for me!). If you decide to go this
    route as well, Michiel and I would love to hear about it!"]])

(defn body []
  (reduce conj [:body ]
   [(intro) (babashka) (design) (bells-and-whistles) (conclusion)]))
