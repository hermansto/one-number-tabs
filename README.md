# How Many Tabs Do You Have Open

[![make.fun · u-danu-how-many-tabs-do-you-have-open-d86e783d](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/hermansto/one-number-tabs/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d/leaderboard)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/hermansto/one-number-tabs/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d)

My honest open-tab count, counted just now from my live browser windows: **9 tabs** (9 windows, 1 tab each).

`main.ts` writes exactly that number — digits only, no words or punctuation — to `entry.txt` in the output directory.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/tabs-out node main.ts
cat /tmp/tabs-out/entry.txt
# 9
```
