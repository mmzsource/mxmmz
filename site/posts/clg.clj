(ns site.posts.clg)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.html :as html])


(defn intro []
  [:div
   [:h1 "Clojure(Script) Learning Guide"]

   [:p
    "After experimenting with Clojure(Script) for years, a colleague asked me to
    share some 'getting started' links. Without further ado:"]])


(defn setup []
  [:div
   [:h2 "Running Clojure"]

   [:p
    "Start with a working setup by following the official "
    (html/a "https://clojure.org/guides/getting_started"
            "Getting Started")
    " page."]])


(defn documentation []
  [:div
   [:h2 "Documentation"]

   [:p
    "I keep coming back to a lot of materials on the official websites of:"]

   (html/ul
    [(html/a "https://clojure.org" "Clojure")
     (html/a "https://clojurescript.org" "ClojureScript")
     (html/a "https://www.datomic.com" "Datomic")])

   [:p
    "Of course there's already a lot of helpful 'getting started' material out
    there: "]

   (html/ul
    [(html/a "https://clojure.org/guides/learn/syntax"
             "Official getting started guide")
     (html/a "https://yogthos.net/ClojureDistilled.html"
             "The excellent Clojure Distilled Guide")
     (html/a "https://learnxinyminutes.com/docs/clojure/"
             "Learn X in Y where X = Clojure")
     (html/a "https://clojure.org/api/cheatsheet"
             "Clojure Cheatsheet")
     (html/a "https://cljs.info/cheatsheet/"
             "ClojureScript Cheatsheet")
     (html/a "https://github.com/shaunlebron/ClojureScript-Syntax-in-15-minutes"
             "ClojureScript syntax in 15 minutes")
     (html/a "http://blog.josephwilk.net/clojure/functions-explained-through-patterns.html"
             "Clojure functions explained through (visual) patterns")
     (html/a "http://chimeces.com/cljs-browser-repl/"
             "ClojureScript Web REPL")])

   [:p
    "I also want to highlight this post that explains how the classic design
    patterns translate Clojure: "
    (html/a
     "http://mishadoff.com/blog/clojure-design-patterns/"
     "Clojure Design Patterns")]])


(defn must-read []
  [:div
   [:h2 "Must Read"]

   [:p
    "Once you get used to working in a REPL, you can't go back to slower
    feedback cycles. Therefore, I consider "
    (html/a "https://clojure.org/guides/repl/introduction"
            "Programming at the REPL")
    " mandatory reading."]])


(defn books []

  [:div
   [:h2 "Books"]

   [:p
    "If you like reading books and you don't have Lisp programming experience,
    I'd recommend these books to get a good start:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/roclojure/"
             "Getting Clojure ")
     (html/a "https://www.oreilly.com/library/view/living-clojure/9781491909270/"
             "Living Clojure")])

   [:p
    "Sometimes you only need some good examples to solve a problem at hand.
    That's where these reference books can help a lot:"]

   (html/ul
    [(html/a "https://www.manning.com/books/clojure-the-essential-reference"
             "Clojure, The Essential Reference")
     (html/a "https://www.oreilly.com/library/view/clojure-cookbook/9781449366384/"
             "Clojure Cookbook")])

   [:p
    "A nice online book is: "
    (html/a "https://www.braveclojure.com/clojure-for-the-brave-and-true/"
            "Clojure for the Brave and True.")
    "For ClojureScript you might like the online book: "
    (html/a "http://langintro.com/cljsbook/"
            "Transforming Data with ClojureScript.")]

   [:p
    "Other Clojure books I've enjoyed reading:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/shcloj3/"
             "Programming Clojure")
     (html/a "https://www.oreilly.com/library/view/clojure-programming/9781449310387/"
             "Clojure Programming")
     (html/a "https://pragprog.com/titles/dswdcloj3/"
             "Web development with Clojure")
     (html/a "https://www.manning.com/books/clojure-in-action-second-edition"
             "Clojure in Action")])

   [:p
    "For the more advanced Lisp / Clojure programmers, I recommend:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/vmclojeco/"
             "Clojure Applied")
     (html/a "https://www.manning.com/books/the-joy-of-clojure-second-edition"
             "The Joy of Clojure")
     (html/a "https://leanpub.com/elementsofclojure"
             "Elements of Clojure")
     (html/a "https://www.wiley.com/en-nl/Professional+Clojure-p-9781119267270"
             "Professional Clojure")])

   [:p
    "Some 'special topic' Clojure books:"]

   (html/ul
    [(html/a "https://pragprog.com/titles/cjclojure/"
             "Mastering Clojure Macros")
     (html/a "https://leanpub.com/clojurepolymorphism"
             "Clojure Polymorphism")
     (html/a "https://leanpub.com/clojure-java-interop"
             "Clojure Extended: Java Interop")])])


(defn courses []

  [:div
   [:h2 "Courses"]

   [:p
    "These Clojure courses will give you a good start, and in some cases a good
    deep dive:"]

   (html/ul
    [(html/a "https://purelyfunctional.tv"
             "Purely Functional Courses by Eric Normand")
     (html/a "https://lambdaisland.com"
             "Lambda Island by Arne Brasseur")
     (html/a "https://www.jacekschae.com"
             "ClojureScript, reagent and re-frame by Jacek Schae")
     (html/a "https://enterpriseclojure.com"
             "Enterprise Clojure Training by Timothy Pratley")
     (html/a "http://www.parens-of-the-dead.com"
             "Parens of the dead by Magnar Sveen")
     (html/a "https://egri-nagy.github.io/popbook/"
             "Poetry of Programming - Puzzle Based Introduction to Functional Programming by Egri Nagy")
     (html/a "https://www.michielborkent.nl/clojurecursus/dictaat.html"
             "(Dutch) Inleiding Functioneel Programmeren met Clojure by Michiel Borkent")
     (html/a "https://aphyr.com/tags/Clojure-from-the-ground-up"
             "Clojure from the ground up by Aphyr")
     (html/a "https://www.oreilly.com/library/view/clojure-inside-out/9781449368647/"
             "Clojure Inside Out - by Neal Ford and Stuart Halloway")
     (html/a "https://www.oreilly.com/library/view/functional-thinking/9781449368630/"
             "Functional Thinking by Neal Ford")
     (html/a "https://learn.codexpanse.com/courses/clojure-1"
             "Clojure Basics - by Code Expanse")
     (html/a "http://kimh.github.io/clojure-by-example/#about"
             "Clojure by Example")])

   [:p "Some Datomic courses:"]

   (html/ul
    [(html/a "https://www.youtube.com/watch?v=yWdfhQ4_Yfw"
             "Day of Datomic (multiple videos)")
     (html/a "http://www.learndatalogtoday.org"
             "Learn Datalog Today")])

   [:p
    "Note: I'm not sponsored by any of these course creators. The only reasons I
    recommend them is because I've actually did one or more courses on these
    platforms and liked them or the courses look good to me after a quick
    scan."]])


(defn practice []

  [:div
   [:h2 "Online Practice"]

   [:p
    "Some online practice sites:"]

   (html/ul
    [(html/a "http://www.4clojure.com"
             "4Clojure")
     (html/a "http://clojurescriptkoans.com"
             "Clojurescript Koans")
     (html/a "https://exercism.io/tracks/clojure"
             "Clojure track on Exercism.io")
     (html/a "https://www.codewars.com/?language=clojure"
             "Clojure Code Wars")])

   [:p
    "One of the things I highly recommend is to install "
    (html/a "https://replete-repl.org" "Replete REPL App")
    " on your phone or mobile device. That's a really lightweight way of
    experimenting with Clojure(Script). I've learned a lot on it and sometimes
    use it to spike some ideas ... or even write a "
    (html/a "https://040code.github.io/2018/08/22/maze-generation" "Maze Generator")
    " in it while I'm on vacation."]

   [:p
    "Replete also has an "
    (html/a "https://repl.replete-web.io" " online version.")
    "As an (easy to remember) alternative there's also an online REPL at"
    (html/a "https://repl.it" "Repl.it")]

   [:p
    "Some interactive 'notebooks' can be found here:"]

   (html/ul
    [(html/a
      "http://viewer.gorilla-repl.org/view.html?source=github&user=lspector&repo=clojinc&path=worksheet.clj"
      "The Gorilla REPL worksheet")
     (html/a
      "https://www.maria.cloud"
      "Learn Clojure with shapes")])])


(defn talks []

  [:div
   [:h2 "Talks"]

   [:p
    "A lot of people are drawn to Clojure by the talks of Rich Hickey. His
    talks are gathered on ClojureTV, in the "
    (html/a "https://www.youtube.com/playlist?list=PLZdCLR02grLrEwKaZv-5QbUzK0zGKOOcr"
            "Rich Hickey Talks")
    " playlist. I recommend every software developer to watch these talks, no
    matter what language you prefer."]

   [:p
    "Some other talks I want to highlight:"]

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

   [:p
    "Some of my favorite talks by other speakers than Rich Hickey, Stuart
    Halloway or David Nolen: "]

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
             "Condition Systems in an Exceptional Language - Chris Houser")
     (html/a "https://www.youtube.com/watch?v=5Nm56YvTKZY"
             "The Art of Tree Shaping with Zippers - Arne Brasseur")
     (html/a "https://www.youtube.com/watch?v=7PoajCqNKpg"
             "Physics in Clojure - Colin Smith")
     (html/a "https://www.youtube.com/watch?v=topKYJgv6qA"
             "Native Clojure with GraalVM - Jan Stepien")
     (html/a "https://www.youtube.com/watch?v=HNp5EaRs3KI"
             "Embrace the JVM - Alexander Yakushev")])

   [:p
    "Some applications of Clojure that also inspired me:"]

   (html/ul
    [(html/a "https://www.youtube.com/watch?v=QJ1qgCr09j8"
             "Machine Learning Live - Mike Anderson")
     (html/a "https://www.youtube.com/watch?v=vLlbEZt-3j0"
             "Generating art in many worlds - Dan Lidral Porter")
     (html/a "https://www.youtube.com/watch?v=zjbcayvTcKQ"
             "Practical Generative Testing Patterns - Srihari Sriraman")
     (html/a "https://www.youtube.com/watch?v=j-kj2qwJa_E"
             "Developing ClojureScript With Figwheel - Bruce Hauman")
     (html/a "https://www.youtube.com/watch?v=G7Z_g2fnEDg"
             "Live Interactive Coding: Devcards - Bruce Hauman")])])


(defn tools []
  [:div
   [:h2 "Tools"]

   [:p
    "The best place to look for the right tool for the job is "
    (html/a "https://www.clojure-toolbox.com"
            "The Clojure Toolbox.")
    " I still want to highlight some essential tools I've often used. Think of
    them as Clojure hammers and screwdrivers; in nearly every job they are
    useful: "]

   (html/ul
    [(html/a "https://leiningen.org"
             "Leiningen - a tool for project automation (project creation,
             dependency management, running tests, building artifacts, etc)")
     (html/a "https://clojure.org/reference/deps_and_cli"
             "Clojure Deps & CLI - the official Clojure way of managing dependencies")
     (html/a "https://github.com/borkdude/babashka"
             "Babashka! - Leverage Clojure where you'd be using Bash otherwise")])

   [:p
    "Clojure covers frontend -, backend -, and bash work, but did you know it
    also covers Unity3D and Machine learning?"]

   (html/ul
    [(html/a "https://arcadia-unity.github.io"
             "Program Unity3D with Clojure")
     (html/a "https://mxnet.apache.org/api/clojure"
             "Machine Learning with Clojure with Apache MxNet Clojure API")])

   [:p
    "Some helpful code quality tools: "]

   (html/ul
    [(html/a "https://guide.clojure.style"
             "The Clojure Style Guide")
     (html/a "https://github.com/borkdude/clj-kondo"
             "clj-kondo - A linter that sparks joy")
     (html/a "https://github.com/venantius/yagni"
             "Yagni - A leiningen plugin for finding dead code")
     (html/a "https://github.com/jonase/kibit"
             "Kibit - A Static Code Analyzer")
     (html/a "https://github.com/cloverage/cloverage"
             "Cloverage - Test Coverage Tool")])])


(defn conferences []
  [:div
   [:h2 "Conferences"]

   [:p
    "Some conferences I've attended or want to attend: "]

   (html/ul
    [(html/a "https://clojuredays.org"
             "Dutch Clojure Days in Amsterdam (Netherlands)")
     (html/a "https://clojured.de"
             "ClojureD in Berlin (Germany)")
     (html/a "https://clojutre.org/"
             "ClojureTre in Tampere (Finland)")
     (html/a "https://heartofclojure.eu"
             "Heart of Clojure in Leuven (Belgium)")])

   [:p
    "Since this list is very Europe centered, I suggest you take a look at the "
    (html/a "https://purelyfunctional.tv/functional-programming-conferences/"
            "'ultimate list of functional programming conferences'")
    "to get an idea what functional - and Clojure conferences are organised
    everywhere around the globe."]])


(defn podcasts []
  [:div
   [:h2 "Podcasts"]

   [:p
    "If you're the type of person that likes to learn about Clojure(Script)
    while cooking, cleaning the house, or sitting on the couch with a nice
    drink, you might like these podcasts:"]

   (html/ul
    [(html/a "https://cognitect.com/cognicast/"
             "Cognicast by Cognitect")
     (html/a "https://www.therepl.net/episodes/"
             "The REPL by Daniel Compton")
     (html/a "https://www.youtube.com/channel/UCYffI7NxmTBCXYQ1SvnQeRQ"
             "Defn PodCast by Vijay Kiran and Ray McDermott")
     (html/a "https://clojurescriptpodcast.com"
             "ClojureScript Podcast by Jacek Schae")
     (html/a "https://clojuredesign.club"
             "Functional Design in Clojure by Christoph Neumann and Nate Jones")])

   [:p
    "These podcasts are less Clojure(Script) specific, and more about software
    engineering in general:"]

   (html/ul
    [(html/a "https://lispcast.com/category/podcast/"
             "LispCast - Thoughts on Functional Programming by Eric Normand")
     (html/a "https://corecursive.com"
             "CoRecursive by Adam Gordon Bell")
     (html/a "https://www.case-podcast.org"
             "CaSE - Conversations about Software Engineering")
     (html/a "https://www.mixcloud.com/devnologypodcast/"
             "Devnology Podcast")
     (html/a "https://www.se-radio.net"
             "Software Engineering Radio")])])


(defn getting-started-guides []
  [:div
   [:h2 "Other Getting Started Guides"]

   (html/ul [(html/a "http://www.clojurenewbieguide.com"
                     "A Clojure Newbie Guide")
             (html/a "https://gist.github.com/yogthos/be323be0361c589570a6da4ccc85f58f"
                     "Clojure Beginner Resources")
             (html/a "https://practicalli.github.io"
                     "Practicalli - Practical approaches to learning Functional Programming with Clojure")
             (html/a "https://www.reddit.com/r/Clojure/"
                     "Reddit - r/Clojure - look in the resources panel")])])


(defn outro []
  [:div
   [:h2 "Missing"]

   [:p
    "Although we've covered a lot of ground in this post, there are definitely
    still some 'missing links'. In addition, over time there will probably be
    broken links. If you find a broken link or think a valuable link should be
    added, please contact me on " (html/twitter)]
   [:p
    "I would also be very interested in good books about Babashka and Datomic.
    These are still missing from my library."]
   [:p
    "This website is cookie-, advertisement -, and user tracking free to give
    you the best reading experience. It would be great to know if this post was
    useful to you. Let me know what you think on " (html/twitter)]
   [:p
    "I wish you a meaningful and fulfilling Clojure(Script) journey!"]])


(defn body []
  (reduce conj [:body ]
   [(intro) (setup) (documentation) (must-read) (books) (courses) (practice)
    (talks) (tools) (conferences) (podcasts) (getting-started-guides) (outro)]))
