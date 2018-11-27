const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
  }
    // END

    