(ns site.blog.clg)

(require '[babashka.classpath :refer [add-classpath]])
(def userdir (System/getProperty "user.dir"))
(add-classpath userdir)
(require '[tools.generate :as gen])


(def meta-data
  {:title     "Clojure(Script) Learning Guide"
   :link      "https://www.mxmmz.nl/blog/clojure-learning-guide.html"
   :category  "Clojure"
   :published "2020-07-06T10:10:10+02:00"
   :updated   "2020-07-06T10:10:10+02:00"
   :content   "A collection of references to learn Clojure(Script)"})


(def intro
  [:div
   [:h1 "Clojure(Script) Learning Guide"]

   [:p
    "After experimenting with Clojure(Script) for years, a colleague asked me to
    share some 'getting started' links. Without further ado:"]])


(def setup
  [:div
   [:h2 "Running Clojure"]

   [:p
    "Start with a working setup by following the official "
    (gen/a "https://clojure.org/guides/getting_started"
           "Getting Started")
    " page."]])


(def documentation
  [:div
   [:h2 "Documentation"]

   [:p
    "I keep coming back to a lot of materials on the official websites of:"]

   (gen/ul
    [(gen/a "https://clojure.org" "Clojure")
     (gen/a "https://clojurescript.org" "ClojureScript")
     (gen/a "https://www.datomic.com" "Datomic")])

   [:p
    "Of course there's already a lot of helpful 'getting started' material out
    there: "]

   (gen/ul
    [(gen/a "https://clojure.org/guides/learn/syntax"
             "Official getting started guide")
     (gen/a "https://yogthos.net/ClojureDistilled.html"
             "The excellent Clojure Distilled Guide")
     (gen/a "https://learnxinyminutes.com/docs/clojure/"
             "Learn X in Y where X = Clojure")
     (gen/a "https://clojure.org/api/cheatsheet"
             "Clojure Cheatsheet")
     (gen/a "https://cljs.info/cheatsheet/"
             "ClojureScript Cheatsheet")
     (gen/a "https://github.com/shaunlebron/ClojureScript-Syntax-in-15-minutes"
             "ClojureScript syntax in 15 minutes")
     (gen/a "http://blog.josephwilk.net/clojure/functions-explained-through-patterns.html"
             "Clojure functions explained through (visual) patterns")
     (gen/a "http://chimeces.com/cljs-browser-repl/"
             "ClojureScript Web REPL")])

   [:p
    "I also want to highlight this post that explains how the classic design
    patterns translate into Clojure: "
    (gen/a
     "http://mishadoff.com/blog/clojure-design-patterns/"
     "Clojure Design Patterns")]])


(def must-read
  [:div
   [:h2 "Must Read"]

   [:p
    "Once you get used to working in a REPL, you can't go back to slower
    feedback cycles. Therefore, I consider "
    (gen/a "https://clojure.org/guides/repl/introduction"
            "Programming at the REPL")
    " mandatory reading."]])


(def books

  [:div
   [:h2 "Books"]

   [:p
    "If you like reading books and you don't have Lisp programming experience,
    I'd recommend these books to get a good start:"]

   (gen/ul
    [(gen/a "https://pragprog.com/titles/roclojure/"
             "Getting Clojure ")
     (gen/a "https://www.oreilly.com/library/view/living-clojure/9781491909270/"
             "Living Clojure")])

   [:p
    "Sometimes you only need some good examples to solve a problem at hand.
    That's where these reference books can help a lot:"]

   (gen/ul
    [(gen/a "https://www.manning.com/books/clojure-the-essential-reference"
             "Clojure, The Essential Reference")
     (gen/a "https://www.oreilly.com/library/view/clojure-cookbook/9781449366384/"
             "Clojure Cookbook")])

   [:p
    "A nice online book is: "
    (gen/a "https://www.braveclojure.com/clojure-for-the-brave-and-true/"
            "Clojure for the Brave and True.")
    "For ClojureScript you might like the online book: "
    (gen/a "http://langintro.com/cljsbook/"
            "Transforming Data with ClojureScript.")]

   [:p
    "Other Clojure books I've enjoyed reading:"]

   (gen/ul
    [(gen/a "https://pragprog.com/titles/shcloj3/"
             "Programming Clojure")
     (gen/a "https://www.oreilly.com/library/view/clojure-programming/9781449310387/"
             "Clojure Programming")
     (gen/a "https://pragprog.com/titles/dswdcloj3/"
             "Web development with Clojure")
     (gen/a "https://www.manning.com/books/clojure-in-action-second-edition"
             "Clojure in Action")])

   [:p
    "For the more advanced Lisp / Clojure programmers, I recommend:"]

   (gen/ul
    [(gen/a "https://pragprog.com/titles/vmclojeco/"
             "Clojure Applied")
     (gen/a "https://www.manning.com/books/the-joy-of-clojure-second-edition"
             "The Joy of Clojure")
     (gen/a "https://leanpub.com/elementsofclojure"
             "Elements of Clojure")
     (gen/a "https://www.wiley.com/en-nl/Professional+Clojure-p-9781119267270"
             "Professional Clojure")])

   [:p
    "Some 'special topic' Clojure books:"]

   (gen/ul
    [(gen/a "https://pragprog.com/titles/cjclojure/"
             "Mastering Clojure Macros")
     (gen/a "https://leanpub.com/clojurepolymorphism"
             "Clojure Polymorphism")
     (gen/a "https://leanpub.com/clojure-java-interop"
             "Clojure Extended: Java Interop")])])


(def courses

  [:div
   [:h2 "Courses"]

   [:p
    "These Clojure courses will give you a good start, and in some cases a good
    deep dive:"]

   (gen/ul
    [(gen/a "https://purelyfunctional.tv"
             "Purely Functional Courses by Eric Normand")
     (gen/a "https://lambdaisland.com"
             "Lambda Island by Arne Brasseur")
     (gen/a "https://www.jacekschae.com"
             "ClojureScript, reagent and re-frame by Jacek Schae")
     (gen/a "https://www.pluralsight.com/courses/clojure-fundamentals-part-one"
             "Clojure Fundamentals by Alan Dipert")
     (gen/a "https://enterpriseclojure.com"
             "Enterprise Clojure Training by Timothy Pratley")
     (gen/a "http://www.parens-of-the-dead.com"
             "Parens of the dead by Magnar Sveen")
     (gen/a "https://egri-nagy.github.io/popbook/"
             "Poetry of Programming - Puzzle Based Introduction to Functional Programming by Egri Nagy")
     (gen/a "https://www.michielborkent.nl/clojurecursus/dictaat.html"
             "(Dutch) Inleiding Functioneel Programmeren met Clojure by Michiel Borkent")
     (gen/a "https://aphyr.com/tags/Clojure-from-the-ground-up"
             "Clojure from the ground up by Aphyr")
     (gen/a "https://www.oreilly.com/library/view/clojure-inside-out/9781449368647/"
             "Clojure Inside Out - by Neal Ford and Stuart Halloway")
     (gen/a "https://www.oreilly.com/library/view/functional-thinking/9781449368630/"
             "Functional Thinking by Neal Ford")
     (gen/a "https://learn.codexpanse.com/courses/clojure-1"
             "Clojure Basics - by Code Expanse")
     (gen/a "http://kimh.github.io/clojure-by-example/#about"
             "Clojure by Example")])

   [:p "Some Datomic courses:"]

   (gen/ul
    [(gen/a "https://www.youtube.com/watch?v=yWdfhQ4_Yfw"
             "Day of Datomic (multiple videos)")
     (gen/a "http://www.learndatalogtoday.org"
             "Learn Datalog Today")])])


(def practice

  [:div
   [:h2 "Online Practice"]

   [:p
    "Some online practice sites:"]

   (gen/ul
    [(gen/a "http://www.4clojure.com"
             "4Clojure")
     (gen/a "http://clojurescriptkoans.com"
             "Clojurescript Koans")
     (gen/a "https://exercism.io/tracks/clojure"
             "Clojure track on Exercism.io")
     (gen/a "https://www.codewars.com/?language=clojure"
             "Clojure Code Wars")])

   [:p
    "One of the things I highly recommend is to install "
    (gen/a "https://replete-repl.org" "Replete REPL App")
    " on your phone or mobile device. That's a really lightweight way of
    experimenting with Clojure(Script). I've learned a lot on it and sometimes
    use it to spike some ideas ... or even write a "
    (gen/a "https://040code.github.io/2018/08/22/maze-generation" "Maze Generator")
    " in it while I'm on vacation."]

   [:p
    "Replete also has an "
    (gen/a "https://repl.replete-web.io" " online version.")
    "As an (easy to remember) alternative there's also an online REPL at"
    (gen/a "https://repl.it" "Repl.it")]

   [:p
    "Some interactive 'notebooks' can be found here:"]

   (gen/ul
    [(gen/a
      "http://viewer.gorilla-repl.org/view.html?source=github&user=lspector&repo=clojinc&path=worksheet.clj"
      "The Gorilla REPL worksheet")
     (gen/a
      "https://www.maria.cloud"
      "Learn Clojure with shapes")])])


(def talks

  [:div
   [:h2 "Talks"]

   [:p
    "A lot of people are drawn to Clojure by the talks of Rich Hickey. His
    talks are gathered on ClojureTV, in the "
    (gen/a "https://www.youtube.com/playlist?list=PLZdCLR02grLrEwKaZv-5QbUzK0zGKOOcr"
            "Rich Hickey Talks")
    " playlist. I recommend every software developer to watch these talks, no
    matter what language you prefer."]

   [:p
    "Some other talks I want to highlight:"]

   (gen/ul
    [(gen/a "https://www.youtube.com/watch?v=wASCH_gPnDw"
             "Expert to Expert: Rich Hickey and Brian Beckman - Inside Clojure")
     (gen/a "https://www.youtube.com/watch?v=GXgbV7jB_Bc"
             "Stewardship made Practical - Stuart Halloway")
     (gen/a "https://www.youtube.com/watch?v=Qx0-pViyIDU"
             "Running with Scissors: Live Coding with Data - Stuart Halloway")
     (gen/a "https://www.youtube.com/watch?v=VNTQ-M_uSo8"
             "Agility and Robustness: Clojure spec - Stuart Halloway")
     (gen/a "https://www.youtube.com/watch?v=Rlu-X5AqWXw"
             "clojure.spec - David Nolen")
     (gen/a "https://www.youtube.com/watch?v=MTawgp3SKy8"
             "ClojureScript: Lisp's Revenge - David Nolen")
     (gen/a "https://www.youtube.com/watch?v=8o01g6C7jWg"
             "Functional Programming in Anger - David Nolen")
     (gen/a "https://www.youtube.com/watch?v=nbMMywfBXic"
             "A Practical Functional Relational Architecture - David Nolen")])

   [:p
    "Some of my favorite talks by other speakers than Rich Hickey, Stuart
    Halloway or David Nolen: "]

   (gen/ul
    [(gen/a "https://www.youtube.com/watch?v=vK1DazRK_a0"
             "Solving Problems the Clojure Way - Rafal Dittwald")
     (gen/a "https://www.youtube.com/watch?v=Tb823aqgX_0"
             "Bottom Up vs Top Down Design in Clojure - Mark Bastian")
     (gen/a "https://www.youtube.com/watch?v=jJIUoaIvD20"
             "Building composable abstractions - Eric Normand")
     (gen/a "https://www.youtube.com/watch?v=eLl6_k_fZn4"
             "Deep Learning Needs Clojure - Carin Meier")
     (gen/a "https://www.youtube.com/watch?v=zp0OEDcAro0"
             "Condition Systems in an Exceptional Language - Chris Houser")
     (gen/a "https://www.youtube.com/watch?v=5Nm56YvTKZY"
             "The Art of Tree Shaping with Zippers - Arne Brasseur")
     (gen/a "https://www.youtube.com/watch?v=7PoajCqNKpg"
             "Physics in Clojure - Colin Smith")
     (gen/a "https://www.youtube.com/watch?v=topKYJgv6qA"
             "Native Clojure with GraalVM - Jan Stepien")
     (gen/a "https://www.youtube.com/watch?v=HNp5EaRs3KI"
             "Embrace the JVM - Alexander Yakushev")])

   [:p
    "Some applications of Clojure that also inspired me:"]

   (gen/ul
    [(gen/a "https://www.youtube.com/watch?v=QJ1qgCr09j8"
             "Machine Learning Live - Mike Anderson")
     (gen/a "https://www.youtube.com/watch?v=vLlbEZt-3j0"
             "Generating art in many worlds - Dan Lidral Porter")
     (gen/a "https://www.youtube.com/watch?v=zjbcayvTcKQ"
             "Practical Generative Testing Patterns - Srihari Sriraman")
     (gen/a "https://www.youtube.com/watch?v=j-kj2qwJa_E"
             "Developing ClojureScript With Figwheel - Bruce Hauman")
     (gen/a "https://www.youtube.com/watch?v=G7Z_g2fnEDg"
             "Live Interactive Coding: Devcards - Bruce Hauman")])])


(def tools
  [:div
   [:h2 "Tools"]

   [:p
    "The best place to look for the right tool for the job is "
    (gen/a "https://www.clojure-toolbox.com"
            "The Clojure Toolbox.")
    " I still want to highlight some essential tools I've often used. Think of
    them as Clojure hammers and screwdrivers; in nearly every job they are
    useful: "]

   (gen/ul
    [(gen/a "https://leiningen.org"
             "Leiningen - a tool for project automation (project creation,
             dependency management, running tests, building artifacts, etc)")
     (gen/a "https://clojure.org/reference/deps_and_cli"
             "Clojure Deps & CLI - the official Clojure way of managing dependencies")
     (gen/a "https://github.com/borkdude/babashka"
             "Babashka! - Leverage Clojure where you'd be using Bash otherwise")])

   [:p
    "Clojure covers frontend -, backend -, and bash work, but did you know it
    also covers Unity3D and Machine learning?"]

   (gen/ul
    [(gen/a "https://arcadia-unity.github.io"
             "Program Unity3D with Clojure")
     (gen/a "https://mxnet.apache.org/api/clojure"
             "Machine Learning with Clojure with Apache MxNet Clojure API")])

   [:p
    "Some helpful code quality tools: "]

   (gen/ul
    [(gen/a "https://guide.clojure.style"
             "The Clojure Style Guide")
     (gen/a "https://github.com/borkdude/clj-kondo"
             "clj-kondo - A linter that sparks joy")
     (gen/a "https://github.com/venantius/yagni"
             "Yagni - A leiningen plugin for finding dead code")
     (gen/a "https://github.com/jonase/kibit"
             "Kibit - A Static Code Analyzer")
     (gen/a "https://github.com/cloverage/cloverage"
             "Cloverage - Test Coverage Tool")])])


(def conferences
  [:div
   [:h2 "Conferences"]

   [:p
    "Some conferences I've attended or want to attend: "]

   (gen/ul
    [(gen/a "https://clojuredays.org"
             "Dutch Clojure Days in Amsterdam (Netherlands)")
     (gen/a "https://clojured.de"
             "ClojureD in Berlin (Germany)")
     (gen/a "https://clojutre.org/"
             "ClojureTre in Tampere (Finland)")
     (gen/a "https://heartofclojure.eu"
             "Heart of Clojure in Leuven (Belgium)")])

   [:p
    "Since this list is very Europe centered, I suggest you take a look at the "
    (gen/a "https://purelyfunctional.tv/functional-programming-conferences/"
            "'ultimate list of functional programming conferences'")
    "to get an idea what functional - and Clojure conferences are organised
    everywhere around the globe."]])


(def podcasts
  [:div
   [:h2 "Podcasts"]

   [:p
    "If you're the type of person that likes to learn about Clojure(Script)
    while cooking, cleaning the house, or sitting on the couch with a nice
    drink, you might like these podcasts:"]

   (gen/ul
    [(gen/a "https://cognitect.com/cognicast/"
             "Cognicast by Cognitect")
     (gen/a "https://www.therepl.net/episodes/"
             "The REPL by Daniel Compton")
     (gen/a "https://www.youtube.com/channel/UCYffI7NxmTBCXYQ1SvnQeRQ"
             "Defn PodCast by Vijay Kiran and Ray McDermott")
     (gen/a "https://clojurescriptpodcast.com"
             "ClojureScript Podcast by Jacek Schae")
     (gen/a "https://clojuredesign.club"
             "Functional Design in Clojure by Christoph Neumann and Nate Jones")])

   [:p
    "These podcasts are less Clojure(Script) specific, and more about software
    engineering in general:"]

   (gen/ul
    [(gen/a "https://lispcast.com/category/podcast/"
             "LispCast - Thoughts on Functional Programming by Eric Normand")
     (gen/a "https://corecursive.com"
             "CoRecursive by Adam Gordon Bell")
     (gen/a "https://www.case-podcast.org"
             "CaSE - Conversations about Software Engineering")
     (gen/a "https://www.mixcloud.com/devnologypodcast/"
             "Devnology Podcast")
     (gen/a "https://www.se-radio.net"
             "Software Engineering Radio")])])


(def news
  [:div
   [:h2 "News"]

   [:p "Some Clojure newsletters:"]

   (gen/ul
    [(gen/a "https://purelyfunctional.tv/browse/#issues-section"
             "PurelyFunctional Newsletter by Eric Normand")
     (gen/a "https://us19.campaign-archive.com/home/?u=f5dea183eae58baf7428a4425&id=ef5512dc35"
             "Clojure Weekly by 'dotemacs'")
     (gen/a "https://us7.campaign-archive.com/home/?u=fef380870c4a5633a21f55d8e&id=b5272e542b"
             "The REPL by Daniel Compton")
     (gen/a "https://insideclojure.org"
             "Inside Clojure by Alex Miller")])

   [:p
    "Of course there is also a lot of blogging going on in our friendly Clojure
    community. The best way to get connected is to keep an eye on the "
    (gen/a "http://planet.clojure.in/" "Planet Clojure") " meta blog."]])

(def getting-started-guides
  [:div
   [:h2 "Other Getting Started Guides"]

   (gen/ul [(gen/a "https://clojure.org/community/resources"
                     "Clojure Community Resources")
             (gen/a "http://www.clojurenewbieguide.com"
                     "A Clojure Newbie Guide")
             (gen/a "https://gist.github.com/yogthos/be323be0361c589570a6da4ccc85f58f"
                     "Clojure Beginner Resources")
             (gen/a "https://practicalli.github.io"
                     "Practicalli - Practical approaches to learning Functional Programming with Clojure")
             (gen/a "https://www.reddit.com/r/Clojure/"
                     "Reddit - r/Clojure - look in the resources panel")])])


(def outro
  [:div
   [:h2 "Missing"]

   [:p
    "Although we've covered a lot of ground in this post, there are definitely
    still some 'missing links'. In addition, over time there will probably be
    broken links. If you find a broken link or think a valuable link should be
    added, please contact me on " (gen/twitter)]
   [:p
    "I'm also very interested in good books about Babashka and Datomic. These
    are still missing from my library, so if you know where to find them, please
    let me know."]
   [:p
    "This website is cookie-, advertisement -, and user tracking free to give
    you the best reading experience. It would be great to know if this post was
    useful to you. Let me know what you think on " (gen/twitter)]
   [:p
    "I wish you a meaningful and fulfilling Clojure(Script) journey!"]])


(defn body []
  [:body intro setup documentation must-read books courses practice
   talks tools conferences podcasts news getting-started-guides outro])
