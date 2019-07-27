# Data Structures

## Linked Lists

**Big O Notation**

**Constant Time O(1)**
- Adding/Removing head nodes
- Adding/Removing tail nodes

**Linear Time O(n)**
- Searching through Linked List

**More Details**

tHe Memory Management aspect of a Linked List is that memory doesn't have to be stored together. Linked Lists are very effective at using space or memory efficiently. Each piece of data is stored on it's own and each piece of data has a next pointer that references the location of the next piece of data. All the data still connected it's just not stored all in one place.

## Binary Search

**Big O Notation**

**Logarithmic Runtime (or Time Complexicity) O(log n)**
- Adding/Removing data
- Searching/Retrieving data

**More Details**

Binary search trees are only performant when they are balanced. To have a balanced binary search tree is to have one which
all or most of the nodes have a left or right child so you have a full tree. In case you notice that you have one side much larger 
than the other the use of Linked List is advised.

## Hash Table

**Big O Notation**

**Constant Time O(1)**
- Adding/Removing data
- Searching/Retrieving data

**More Details**
We can use Hash Tables to store data for just about anything. One draw back about hash tables is that since the insertion of data
is done in a random way determined by the insertion function, in a lot of cases hash tables don't store references to other pieces 
of data in the data structure like Linked Lists and Binary search trees do. But this functionally can be implemented in the hash table
by placing specific properties on your hash nodes. 

**Source: Summary of Udemy Courses:** https://bit.ly/2HkrVc0