(ns site.index)

(defn body []
  [:body

   [:blockquote {:class "big-blockquote"}
    "Art is anything you can do well;"
    "anything where there are options for doing it well or poorly."
    [:span "Robert Pirsig"]]

   [:p {:class "center"}
    "When you see a real artist, one who is really good at it, then you know
    right away that there’s such a thing as an art of motorcycle
    maintenance." [:br]
    "Art is anything you can do well, anything where there are options for doing
    it well or poorly." [:br]
    "And there are very few things in this world that don’t have options for
    doing it well. You can make an art out of anything. And I think that making
    an art out of your technical life is solving the problem of technology." [:br]
    "Quotes from Robert Pirsig, author of 'Zen and the art of motorcycle
    maintenance' and 'Lila'."]

   [:blockquote
    "Live clean, let your works be seen."
    "Stand firm or go feed worm."
    [:span "Peter Tosh"]]])
