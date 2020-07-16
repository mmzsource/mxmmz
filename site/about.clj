(ns site.about)

(defn body []
  [:body
   [:h2 "MxMMz?"]

   [:p "My name is Maarten Metz and the initials and last letter of my last name
        pretty much explain the second part of this domain name. But what's up
        with the Mx?"]

   [:h2 "Mx?"]

   [:p "Since I'm a software engineer, most of my time I'm reading, writing and
       changing text on a screen. The"
       [:a {:href "https://www.gnu.org/software/emacs/"} "emacs"]
       "editor is my main tool to work with text. This editor is highly
       customizable and has a lot of functionality. Emacs users often use
       keyboard shortcuts to 'invoke' that functionality."]

   [:p "If you don't remember the keyboard shortcut for a function (or the
       function has no keyboard shortcut), you can always invoke it by guessing
       its name. That's done with the"
       [:a {:href "https://www.gnu.org/software/emacs/manual/html_node/efaq/Extended-commands.html"} "M-x"]
       "command. So for instance you can call 'M-x goto-line' to jump to a
       certain line number, or 'M-x quick-calc' to invoke a simple calculator."]

   [:p "Every function in emacs basically looks at 'the world' from a very
       specific perspective. Therefore when people type MxMMz in their browser
       bar I like to think that they invoke the MMz perspective."]

   [:h2 "M-x MMz"]

   [:p "Now that is cleared up, you should really hover over the 'MxMMz' text in
       the header of the page to discover a small easter egg that was there all
       along. And don't forget to M-x MMz every once in a while!"]])
