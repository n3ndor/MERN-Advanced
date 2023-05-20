//Quick Sort Implementation that uses Hoare's partition algorithm (Wikipedia):
// Sorts a (portion of an) array, divides it into partitions, then sorts those
// algorithm quicksort(A, lo, hi) is
// if lo >= 0 && hi >= 0 && lo < hi then
// p:= partition(A, lo, hi)
// quicksort(A, lo, p) // Note: the pivot is now included
// quicksort(A, p + 1, hi)

// // Divides array into two partitions
// algorithm partition(A, lo, hi) is
// // Pivot value
// pivot:= A[floor((hi - lo) / 2) + lo] // The value in the middle of the array
// // Left index
// i:= lo - 1
// // Right index
// j:= hi + 1

//   loop forever
// // Move the left index to the right at least once and while the element at
// // the left index is less than the pivot
// do i:= i + 1 while A[i] < pivot
//     // Move the right index to the left at least once and while the element at
//     // the right index is greater than the pivot
//     do j:= j - 1 while A[j] > pivot
//     // If the indices crossed, return
//     if i >= j then return j
//     // Swap the elements at the left and right indices
//     swap A[i] with A[j]

// Consider: Where will the recursive call be? When do we know a portion of the array has been sorted?
// When do we know the entire array has been sorted?

// The recursive call in quicksort happens on the smaller parts of the array that we get after picking a pivot
// and separating the array into two parts. A part of the array is sorted when it has only one element, or no elements at all.
// We're done with the entire sorting process when all the parts have been sorted, or in other words,
// when all the elements have been a pivot at some point.

// Bonus 1: Why not just choose an easy pivot, such as the left-most value?

// the best way to choose pivot is to take from the middle, because if we take the left-most or right-most on one side will
// be only one element and it takes longer to sort the array.

// Bonus 2: What is the Big O time complexity of this algorithm?

// O(N*log(N)) it's named Quick Sort, that's the fastest way what we can achieve in this algorithm,
// the worst case is O(N^2) and that's equivalent with the Bubble Sort.

// Bonus 3: Why is quicksort called quicksort if its Big O time complexity isn't impressive?

// Quicksort can be fast if we peek the pivot right, in the worst scenario takes the same time like the Bubble sorting
// Because we try to take better pivots we get faster process
