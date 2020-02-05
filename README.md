# Subreddette Series

*Subreddette Series* is an exploration of conceptual algorithmic art in relation to communication and computing on the Internet. The idea is to gather post titles and comments from subreddits on Reddit and display them as pixels. The end result is a "color palette" of the subreddit.

## The Algorithm

Post titles and comments are fetched from a subreddit via the Reddit API -- in our case, our filter was top posts of all time, but the filter can be changed with trivial modification of the code.

The titles and comments are then split into individual words and cleaned of non-alphabetical characters. Each letter in the resulting set of words is translated into a numbers between 1 and 255. These numbers are then displayed as RGB colors in chunks of 3 on an HTML canvas.

## Credits/Licensing

Made by Benjamin Pang & Adham Chakohi for Understanding IM Spring 2020.

Distributable under MIT License.
