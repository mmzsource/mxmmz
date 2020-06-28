(ns site.posts.clg)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])


(defn intro []
  [:div
   [:h1 "Clojure Learning Guide"]

   [:p
    "After experimenting with Clojure(script) for years, a colleague asked me to
    share some 'getting started' links. Without further ado:"]])


(defn setup []
  [:div
   [:h2 "Running Clojure"]

   [:p "Although this list will also provide links to online Clojure(Script)
   environments, it's always nice to start off with a working setup on your own
   computer. For the latest guidance on this I recommend the official "
    (html/a "https://clojure.org/guides/getting_started" "Getting Started") " page."]])


(defn documentation []
  [:div
   [:h2 "Documentation"]

   [:p "I keep coming back to almost everything on the official websites of:"]

   (html/ul
    [(html/a "https://clojure.org" "Clojure")
     (html/a "https://clojurescript.org" "ClojureScript")
     (html/a "https://www.datomic.com" "Datomic")])

   [:p "Of course there's already a lot of helpful getting started material out
   there: "]

   (html/ul
    [(html/a "https://clojure.org/guides/learn/syntax" "Official getting started guide")
     (html/a "https://yogthos.net/ClojureDistilled.html" "The excellent Clojure Distilled Guide")
     (html/a "https://learnxinyminutes.com/docs/clojure/" "Learn X in Y where X = Clojure")
     (html/a "https://clojure.org/api/cheatsheet" "Clojure Cheatsheet")
     (html/a "https://cljs.info/cheatsheet/" "ClojureScript Cheatsheet")
     (html/a "https://github.com/shaunlebron/ClojureScript-Syntax-in-15-minutes" "ClojureScript syntax in 15 minutes")
     (html/a "http://chimeces.com/cljs-browser-repl/" "ClojureScript Web REPL")])])


(defn must-read []
  [:div
   [:h2 "Must Read"]

   [:p "Once you get hooked working in a REPL, you'll can't go back to slower
   feedback cycles. Therefore, I consider "
    (html/a "https://clojure.org/guides/repl/introduction" "Programming at the
    REPL") " mandatory reading."]])


(defn books []

  [:div
   [:h2 "Books"]

   [:p
    "If you like reading books and you don't have Lisp programming experience,
    I'd recommend these books to get a good start:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/roclojure/" "Getting Clojure ")
     (html/a "https://www.oreilly.com/library/view/living-clojure/9781491909270/" "Living Clojure")])

   [:p
    "Sometimes you only need some good examples to solve a problem at hand.
    That's where these reference books can help a lot:"]

   (html/ul
    [(html/a "https://www.manning.com/books/clojure-the-essential-reference" "Clojure, The Essential Reference")
     (html/a "https://www.oreilly.com/library/view/clojure-cookbook/9781449366384/" "Clojure Cookbook")])

   [:p "A nice online book is: "
    (html/a
     "https://www.braveclojure.com/clojure-for-the-brave-and-true/" "Clojure for the Brave and True")]

   [:p
    "Other Clojure books I've enjoyed reading and learned a lot from:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/shcloj3/" "Programming Clojure")
     (html/a "https://www.oreilly.com/library/view/clojure-programming/9781449310387/" "Clojure Programming")
     (html/a "https://pragprog.com/titles/dswdcloj3/" "Web development with Clojure")
     (html/a "https://www.manning.com/books/clojure-in-action-second-edition" "Clojure in Action")])

   [:p "For the more advanced Lisp / Clojure programmers, I recommend:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/vmclojeco/" "Clojure Applied")
     (html/a "https://www.manning.com/books/the-joy-of-clojure-second-edition" "The Joy of Clojure")
     (html/a "https://leanpub.com/elementsofclojure" "Elements of Clojure")
     (html/a "https://www.wiley.com/en-nl/Professional+Clojure-p-9781119267270" "Professional Clojure")])

   [:p
    "Some 'special topic' Clojure books:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/cjclojure/" "Mastering Clojure Macros")
     (html/a "https://leanpub.com/clojurepolymorphism" "Clojure Polymorphism")
     (html/a "https://leanpub.com/clojure-java-interop" "Clojure Extended: Java Interop")])])


(defn courses []

  [:div
   [:h2 "Courses"]

   [:p "Most of the offered Clojure courses I've done are really good. My order of preference:"]

   (html/ul
    [(html/a "https://purelyfunctional.tv" "Eric Normand's Purely Functional Courses")
     (html/a "https://www.oreilly.com/library/view/clojure-inside-out/9781449368647/"
             "Clojure Inside Out - by Neal Ford and Stuart Halloway")
     (html/a "https://www.oreilly.com/library/view/functional-thinking/9781449368630/"
             "Functional Thinking by Neal Ford")
     (html/a "https://lambdaisland.com" "Arne Brasseur's Lambda Island")
     (html/a "https://www.youtube.com/watch?v=yWdfhQ4_Yfw" "Day of Datomic (multiple videos)")
     (html/a "https://learn.codexpanse.com/courses/clojure-1" "Clojure Basics - by Code Expanse")
     (html/a "http://kimh.github.io/clojure-by-example/#about" "Clojure by Example")])])


(defn practice []

  [:div
   [:h2 "(Online) Practice"]

   [:p "Some online practice sites:"]

   (html/ul
    [(html/a "http://www.4clojure.com" "4Clojure")
     (html/a "http://clojurescriptkoans.com" "Clojurescript Koans")
     (html/a "https://exercism.io/tracks/clojure" "Clojure track on Exercism.io")
     (html/a "https://www.codewars.com/?language=clojure" "Clojure Code Wars")])

   [:p "One of the things I highly recommend is to get a REPL on your Phone or
       other mobile device. That's a really lightweight way of experimenting with
       Clojure(Script). Therefore I recommend you install
       the "
       (html/a "https://replete-repl.org" "Replete REPL App.")
       "I've learned a lot on it and sometimes use it to spike some ideas... or even write a "
       (html/a "https://040code.github.io/2018/08/22/maze-generation" "Maze Generator")
       " in it when on vacation."]

   [:p "Replete also has an "
    (html/a "https://repl.replete-web.io" " online version.")
    "But I if you don't have this link close, you may remember you can also
    always fire up a repl at "
    (html/a "https://repl.it" "Repl.it")]])


(defn talks []

  [:div
   [:h2 "Talks"]

   [:p "A lot of people are drawn to Clojure by the talks of Rich Hickey. His
   talks are gathered on ClojureTV, in the "
    (html/a "https://www.youtube.com/playlist?list=PLZdCLR02grLrEwKaZv-5QbUzK0zGKOOcr"
            "Rich Hickey Talks")
    " playlist. There's all good in their own typical way and recommended for
    every developer, no matter what language they prefer."]

   [:p "Some other talks I want to highlight:"]

   (html/ul
    [(html/a "https://www.youtube.com/watch?v=wASCH_gPnDw"
             "Expert to Expert: Rich Hickey and Brian Beckman - Inside Clojure")
     (html/a "https://www.youtube.com/watch?v=GXgbV7jB_Bc"
             "Stewardship made Practical - Stuart Halloway")
     (html/a "https://www.youtube.com/watch?v=Qx0-pViyIDU"
             "Running with Scissors: Live Coding with Data - Stuart Halloway")
     (html/a "https://www.youtube.com/watch?v=VNTQ-M_uSo8"
             "Agility and Robustness: Clojure spec - Stuart Halloway")
     (html/a "https://www.youtube.com/watch?v=Rlu-X5AqWXw"
             "clojure.spec - David Nolen")
     (html/a "https://www.youtube.com/watch?v=MTawgp3SKy8"
             "ClojureScript: Lisp's Revenge - David Nolen")
     (html/a "https://www.youtube.com/watch?v=8o01g6C7jWg"
             "Functional Programming in Anger - David Nolen")
     (html/a "https://www.youtube.com/watch?v=nbMMywfBXic"
             "A Practical Functional Relational Architecture - David Nolen")])

   [:p "But apart from Rich Hickey, Stuart Halloway and David Nolen, there are a
   lot more interesting speakers (and talks) in the clojure community. Some of
   my favorites: "]

   (html/ul
    [(html/a "https://www.youtube.com/watch?v=vK1DazRK_a0"
             "Solving Problems the Clojure Way - Rafal Dittwald")
     (html/a "https://www.youtube.com/watch?v=Tb823aqgX_0"
             "Bottom Up vs Top Down Design in Clojure - Mark Bastian")
     (html/a "https://www.youtube.com/watch?v=jJIUoaIvD20"
             "Building composable abstractions - Eric Normand")
     (html/a "https://www.youtube.com/watch?v=eLl6_k_fZn4"
             "Deep Learning Needs Clojure - Carin Meier")
     (html/a "https://www.youtube.com/watch?v=zp0OEDcAro0"
             "Condition Systems in an Exceptional Language")
     (html/a "https://www.youtube.com/watch?v=5Nm56YvTKZY"
             "The Art of Tree Shaping with Zippers")
     (html/a "https://www.youtube.com/watch?v=7PoajCqNKpg"
             "Physics in Clojure - Colin Smith")
     (html/a "https://www.youtube.com/watch?v=topKYJgv6qA"
             "Native Clojure with GraalVM - Jan Stepien")
     (html/a "https://www.youtube.com/watch?v=HNp5EaRs3KI"
             "Embrace the JVM - Alexander Yakushev")])

   [:p "Some of the applications of Clojure:"]

   (html/ul
    [(html/a "https://www.youtube.com/watch?v=QJ1qgCr09j8"
             "Machine Learning Live - Mike Anderson")
     (html/a "https://www.youtube.com/watch?v=vLlbEZt-3j0"
             "Generating art in many worlds - Dan Lidral Porter")
     (html/a "https://www.youtube.com/watch?v=zjbcayvTcKQ"
             "Practival Generative Testing Patterns - Srihari Sriraman")])

   [:p "and a special list for Bruce Hauman who has made the programming
   experience of ClojureScript developers so much better:"]

   (html/ul
    [(html/a "https://www.youtube.com/watch?v=j-kj2qwJa_E"
             "Developing ClojureScript With Figwheel - Bruce Hauman")
     (html/a "https://www.youtube.com/watch?v=G7Z_g2fnEDg"
             "Live Interactive Coding: Devcards - Bruce Hauman")])])

(defn tools []
  [:div
   [:h2 "Tools : WIP"]])

(defn conferences []
  [:div
   [:h2 "Conferences: WIP"]])

(defn podcasts []
  [:div
   [:h2 "Podcasts: WIP"]])

(defn community []
  [:div
   [:h2 "Community: WIP"]])

(defn getting-started-guides []
  [:div
   [:h2 "Other Getting Started Guides"]

   (html/ul [(html/a "http://www.clojurenewbieguide.com" "A Clojure Newbie Guide")])])


(defn body []
  (-> [:body ]
      (conj (intro))
      (conj (setup))
      (conj (documentation))
      (conj (must-read))
      (conj (books))
      (conj (courses))
      (conj (practice))
      (conj (talks))
      (conj (tools))
      (conj (conferences))
      (conj (podcasts))
      (conj (community))
      (conj (getting-started-guides))))
