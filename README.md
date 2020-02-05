# Reddit Rainbow

*Reddit Rainbow* is an exploration of conceptual algorithmic art in relation to communication and computing on the Internet. The idea is to gather post titles and comments from subreddits on Reddit and display them as pixels. The end result is a "color palette" of the subreddit at that moment in time.

## The Algorithm

Post titles and comments are fetched from a subreddit via the Reddit API -- in our case, our filter was top posts of all time, but the filter can be changed with trivial modification of the code.

The titles and comments are then split into individual words and cleaned of non-alphabetical characters. Each letter in the resulting set of words is translated into a numbers between 1 and 255. These numbers are then displayed as RGB colors in chunks of 3 on an HTML canvas.

## Artistic Inspirations

- [Cory Arcangel's Super Mario Clouds](http://www.coryarcangel.com/things-i-made/2002-001-super-mario-clouds)
- [r/place](https://www.reddit.com/r/place)
- [r/ooer](https://www.reddit.com/r/ooer)

## Demo/Examples

[Demo](https://bennyboy.tech/rainbow)


> Hot Posts from r/all on February 5, 2020 22:00
> ![](https://github.com/molarmanful/rainbow/blob/master/examples/hot_all_02_05_2020_22_00.png)


> Hot Posts from r/hongkong on February 5, 2020 21:54
> ![](https://github.com/molarmanful/rainbow/blob/master/examples/hot_hongkong_02_05_2020_21_54.png)

> Top Posts of All Time from r/art on February 5, 2020 21:58
> ![](https://github.com/molarmanful/rainbow/blob/master/examples/top_art_02_05_2020_21_58.png)

## Credits/Licensing

Made by Benjamin Pang & Adham Chakohi for Understanding IM Spring 2020.

Distributable under MIT License.
