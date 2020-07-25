(ns site.blog.bb)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.generate :as gen])


(def intro
  [:div
   [:h1 "Building a website with Babashka"]

   [:p "After some experience creating blog posts with software offered by
       hosting providers or by generating websites from markdown, I felt it should
       be easier, more flexible, and more maintainable to create something simple
       like a website."]

   [:img {:src "./babashka-img/dependencies-tweet-gary-bernhardt.png"
          :alt "Dependency Hell"}]

   [:p "When I want to write a blog post ... I want to write a blog post! I don't
        want to 'negotiate' with broken dependencies, look for unclear,
        out-of-date or non-existent documentation, spin up containers or update
        container engines or remember conventions in supposedly simple
        configuration files."]])


(def babashka
  [:div
   [:div {:class "imgtxt-container"}
    [:img {:class "container-svg"
           :src   "./babashka-img/babashka.svg"
           :alt   "babashka logo"}]
    [:div {:class "container-txt"}

     [:h2 "Enter Babashka"]
     [:p "In essence, "
      (gen/a "https://github.com/borkdude/babashka" "Babashka")
      "is a tiny Clojure interpreter tuned for shell scripting. By compiling to
         a native binary using"
      (gen/a "https://www.graalvm.org" "GraalVM,")
      "the infamous JVM startup times are GONE which makes the possibility of
         using Clojure on the command line a lot more attractive for a lot of Clojure
         enthusiasts."]

     [:p "Suddenly an idea struck:"
         [:em "what if I could make a website with Babashka as" [:strong "only"]
         "dependency?"]
         "After all: installing and updating Babashka is very easy and Babashka is
         available on all platforms."]]]])


(def design
  [:div
   [:div {:class "imgtxt-container"}
    [:img {:class "container-img"
           :src   "./babashka-img/mxmmz-tree.png"
           :alt   "File organisation"}]
    [:div {:class "container-txt"}

     [:h2 "Design"]

     [:p "The source code for my website can be found"
         (gen/a "https://github.com/mmzsource/mxmmz" "here.")
         "The directory listing already tells a lot about my development setup
         for this website."]

     [:p "The" [:strong "site"] "folder contains my website pages as Clojure
         files, using the"
         (gen/a "https://github.com/weavejester/hiccup" "hiccup")
         "format. It also contains plain css files."]

     [:p [:strong "gen.clj"] "is a Babashka executable that generates the html
         files from the Clojure files. It puts those html files together with the
         css files in the" [:strong "publish"] "folder."]

     [:p "To publish, you just" [:strong "./gen.clj"] "that website into
          existence and 0.1 seconds later you can start pushing everything in
          the" [:strong "publish"] "folder to your hosting provider."]]]])


(def bells-and-whistles
  [:div
   [:h2 "Bells and whistles"]

   [:p "That's all folks! That's all you need to build a website. You could even
       go more spartan and write the html yourself. That's a bit too bare-bones
       for me. I like an occasional helper function when it's needed. These
       helper functions are located in the" [:strong "tools"] "folder."]

   [:p "Furthermore, I got tired of refreshing my browser after updating a
       blog post file in my editor, so I decided to create a" [:strong "dev.clj"]
       "Babashka executable. It monitors my folders, runs the" [:strong "gen.clj"]
       "script when it detects changes and then opens the refreshed page for me. It
       comes with the cost of an additional Babashka dependency: the "
       (gen/a "https://github.com/babashka/pod-babashka-filewatcher" "filewatcher
       pod.") "For me that's worth it."] ])


(def conclusion
  [:div
   [:h2 "Conclusion"]

   [:p "Although it's not perfect (yet!) I like this setup. It's all there in
       plain sight for me to adapt to my wishes. It's possible and even quite
       simple to add generated code from other ClojureScript projects of mine
       into this website. For instance, have a look at this"
       (gen/a "https://www.mxmmz.nl/blog/matrix-rain-in-clojurescript.html" "Matrix
       Rain visualisation.")]

   [:p "I'd like to thank"
       (gen/a "https://twitter.com/borkdude" "Michiel Borkent")
       "for his awesome"
       (gen/a "https://github.com/borkdude/babashka" "Babashka")
       "tool and for helping me getting this setup up-and-running. Building a
       website in Clojure has ever been easier (for me at least). If you decide
       to go this route as well, Michiel and I would love to hear about it!"]])


(defn body []
  [:body intro babashka design bells-and-whistles conclusion])
