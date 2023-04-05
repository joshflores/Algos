function minGroups(intervals) {
    const starts = intervals.map((el) => el[0]).sort((a, b) => a - b);
    const ends = intervals.map((el) => el[1]).sort((a, b) => a - b);

    let group = 0;
    let endIdx = 0;
    for (i = 0; i < starts.length; i++) {
      if (starts[i] <= ends[endIdx]) {
        group++;
      } else {
        endIdx++;
     }
    }
  return group;
}

let intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]];

console.log(minGroups(intervals))
