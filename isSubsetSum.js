function isSubsetSum(set, n, sum) {
    if (sum === 0) {
        return true;
    }
    if (n === 0 && sum !== 0) {
        return false;
    }
    if (set[n - 1] > sum) {
        return isSubsetSum(set, n - 1, sum);
    }
    return isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1]);
}

const set = [3, 34, 4, 12, 5, 2];
const sum = 9;
const n = set.length;
if (isSubsetSum(set, n, sum) === true) {
    console.log("Found a subset with given sum");
} else {
    console.log("No subset with given sum");
}