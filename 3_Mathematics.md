# **Lesson 3 - Mathematics**

## Description

The following lesson continues the instruction on Integers, covers fundamental mathematical procedures in coding, and introduces programmatic errors to the student.

## Introduction

After you welcome the student back, you should spend a few minutes discussing any new questions they may have about the content or curriculum, as well as if they had any concerns about any excercises they were working on at home.

## **Phase One: Objectives**

- [ ] The student understands what a comment is and how comments will not be compiled for the computer to read.

- [ ] The student understands that there are fundamental mathematical procedures that can be performed on integers. These procedures include addition, subtraction, multiplication, division (both floor and integer) and modulus.

- [ ] The student understands that mathematical operations in Python follow PEMDAS.

- [ ] The student understands the basic premise of what a programmatic error is and generally how to avoid them by following proper conventions.

## **Phase Two: Activities**

Last week we covered what variables are, as well as how they relate to their data types. We also covered how to compare variables on a basic level through the use of the equality operator. This week we want to dive further into Integers, specifically on the types of operations we can perform on integers to represent mathematical equations. Though, we'll start with an important lesson for all coding languages.

Before we get started with the bulk of today's lesson, it's important cover one essential concept to all of programming. This concept is the comment. Comments are used to provide easy, human-readable descriptions to your code, so someone else is easily able to understand what each part of your code does. Comments have no effect on the output of your code, and are ignored when it is time to compile your code into machine language. So, you can put anything in comments without the fear of causing issues in your code. Here's a quick example:

```python
# Program to record hot dog order

pickles = True
tomatoes = False
onions = True
ketchup = True
```

Oftentimes if a program is extremely simple like the one above, we won't include comments, but we did anyways just to get some practice. Comments are made with the pound symbol, otherwise known as a "hashtag", and once you include that symbol the rest of the line will be ignored by the compiler.

- _What are some of the benefits of comments?_ Readability for yourself and others. An easy way to remove code that's not working that you want to save for a later review. A way to organize your code in a way that is logical and easy to follow.

Let's move on and talk about operators we have been exposed to. We covered the addition operator and adding the value of two integers, even if we just use their identifier like the following.

```python
# Combinding variables using their identifiers (names)

a = 3
b = 4
c = a + b
print(c)
```

- _What if we were going to add another "a" to c? What is wrong about the following lines of code?_ There isn't anything inherently *wrong* with it progmattically, but syntactically, as in referring to the placement of each of the instructions, it takes up many lines to do one simple task.
  
```python
# Combinding variables using their identifiers (names)

a = 3
b = 4
c = a + b
c = c + a
print(z)
```

As we begin to write larger and larger programs together, we'll start to see how extra steps like the above become cumbersome and unnecessary. That's why we use mathematical operators to perform many steps together, often in one line of code.

The first operation that we will cover is addition. It's simple, and we have talked about it before. To add two integers simply write two numbers or variables that are also integers, and add them together.

Though, we can actually perform many other operations than just adding. To subtract integers use the subtraction sign in place of addition.

```python
# Combinding variables using their identifiers (names)

a = 3
b = 4
c = x - y
print(c)
```

Multiplying is a little different. To multiply we are going to use an asterik instead of the typical *x* or bullet point. Multiplication looks like this.

```python
# Combinding variables using their identifiers (names)

a = 3
b = 4
c = a * b
print(c)
```

Next up is division. Though in Python we have two types of division. We'll cover these with an exercise.

---
### **Excercise 1: Types of Division**
---

So, we've already learned that in Python, we have a datatype called an *int*. For the following exercise I want you to predict each output one by one.

> **Predict:** Give the student the time and space to make predictions - even if they are wrong. The process of attempting and learning from mistakes is a mark of growth, not the ability to say the correct answer and be done. You want the student to be able to explain their reasoning behind their choices.

> **Tip:** All explanation should be done before running the program.


```python
# Predict the output of the following program, then run the code to check your work. Make sure to explain your reasoning.

a = 6
b = 4
c = a / b
print(c)
```

- _Be careful, remember we are dividing integers. So theoretically, our result should also be an integer right?_ This brings up the contrast between integer division where we are only allowed to have whole number results, and division with a decimal point like 3/2 = 1.5/
  
To distinguish between these two cases of whether to add a decimal point or not we are going to introduce a new date type called a **<ins>float</ins>**. In Python a float is like an integer, except that a float can have a decimal point and decimal value, whereas an integer must be a whole number with no decimals.

Here's an example of a float:

```python
# Float example

a = 6.4
print(a)
```

To be clear which division we are talking about, we programmers use one slash */* for float division and two slashes *//* for integer division.

Since we have talked about float division, or basically the division that you already know with decimals, we also are going to cover integer division. With integer division you always round down to the nearest integer. This way, you chop off any remaining bits, and get a nice whole number. For example, 5 divided by 2 is equal to 2. 

In short, integer division, also known as floor division uses the *//* operator and always produces an integer as a result. Float division, also known as decimal division, uses the */* operator and produces a float.


To get some more practice lets go through some more examples. Make sure to label floats with a decimal and integers as a whole number.

```python
# Predict what the following lines will output in each comment

a = 12
b = 4
print(a // b)
# Prediction: ___

a = 7
b = 4
print(a / b)
# Prediction: ___

a = 11
b = 5
print(a / b)
# Prediction: ___

a = 19
b = 7
print(a // b)
# Prediction: ___

a = 5
b = 5
print(a / b)
# Prediction: ___
```

<details>
<summary> Solution</summary>

```python
# From top to bottom

3
1.75
2.2
2
1.0
```
</details>

</details>
<br>

> **Tip:** Make sure the student always labels float division with a decimal even if the result doesn't have a decimal. For example 5 / 5 = 1.0, not 1.

---
### **Excercise 2: Modulus**
---

Now that we have covered the basic four operations, how about we get on to some *serious* computer science math.

The **<ins>modulus</ins>** operator is an important mathematical operator not only for Python but for coding in general. The modulus operator is basically just like a division, but instead, modulus outputs the remainder. This is a new concept for us, so let's get some examples to clear things up.

In short, modulus just asks, "whats the remainder?"

```python
# The modulus "%" operator

print(5 % 2) # outputs 1 because 2 goes into 5 two times with a remainder of 1

print(7 % 4) # outputs 3

print (10 % 10) # outputs 0 because 10 goes into 10 evenly with no remainder

print(6 % 4) # outputs 2
```

Now, many students wonder what the point is of knowing the remainder of something. But when coding, knowing the remainder is often a very valuable tool to have. One good example is for telling if a number is a multiple. Off the top of your head would you be able to answer the following question:

```python
# Predict the output

print(54982 % 37)
```

Well maybe, but it would take a very, very long time (the answer by the way is 0). Since we know the remainder is 0, we also know that the 37 divides into 54,982 evenly with no remainder, and thus, 54,982 is a multiple of 37. The opposite can also be inferred.

```python
# Predict the output

print(23453 % 37) # outputs 32
```
Since the above statement outputs 32, we know that 23,453 is not a multiple of 37.

We can also do the same thing with even and odd numbers. Take 5 for example. If you modulus, or *mod* as programmers like to say, 5 by 2 you get a result of 1. Any number that is modded by 2 to make 1 is odd, and any number that is modded by 2 to get 0 is even. This makes sense, because for a number to be even you would expect 2 to go into that number evenly with no remainder.

Modulus is a tool that will prove extremely handy as we progres further into Python. Now, let's do some modulus practice.

```python
# Predict what the following lines will output in each comment

a = 12
b = 8
print(a % b)
# Prediction: ___

a = 49
b = 7
print(a % b)
# Prediction: ___

a = 17
b = 4
print(a % b)
# Prediction: ___

a = 34
b = 7
print(a % b)
# Prediction: ___

a = 1,000,000
b = 10
print(a % b)
# Prediction: ___
```

<details>
<summary> Solution</summary>

```python
# From top to bottom

4
0
1
6
0
```
</details>
</details>

---

We've covered a lot of important math fundamentals of Python and of coding, but there is one thing to keep in mind as we get further and further into the language. One important pest to look out for are software **<ins>bugs</ins>**. As you may know, this is when a mistake causes your program to produce a result that is incorrect and unexpected. Bugs are often also referred to as **<ins>errors</ins>**. While we will encounter many bugs it's important to be aware of bugs before they happen so you can write code quickly and efficiently.

There are three main groups of errors.

The first are **<ins>syntax errors</ins>**. Remember that syntax is how you write your code, like the spacing and correct placement of coding statements. These are the easiest to spot and catch because they don't involve any complex logic. One of the most common syntax errors in Python is forgetting a closing parenthesis like so:

```python
# Syntax error example

print('Hello World' # missing a parenthesis
```

The second type of error is a **<ins>runtime error</ins>**. This is when there were no syntax errors, and your code compiles, but some rule was violated when your program was actually executed. An important error to be aware of, especially in regards to todays lesson is ZeroDivisionError. This is when you attempt to divide or modulus by 0. Just like in real life when you can't divide into 0, as in you can't divide a number into 0 parts, you also can't divide by 0 in Python. Here's an example of that error:

```python
# Runtime error example

print(3 % 0) # outputs ZeroDivisionError: integer division or modulo by zero
```

The last type of error is a logic error. This is when your code successfully compiles, and successfully runs, but doesn't actually do what you intended it to do. These are often the hardest errors to catch and will show up later when we get to more complicated Python. For now though, here is an example of a logic error.

```python
# Logic error example
# Write a program that prints the result of 3 times 5 plus 2

print(3 + 5 * 2)  # incorrect order of operations
```
> **Focus:** Ensure that the student understands that mathematical operations in Python follow the same order of operations of PEMDAS that your student has been taught in math class. This includes putting parenthesis around an expression.


---
### **Excercise 3: Spot the Errors**
---

Now that we know about the types of errors, as well as different errors that may arise in our code, let's practice reading some code closely and looking for errors.

```python
# Read the following code and mark any lines that you think contain an error with a comment saying type error - and then the specific error if applicable.

a = 17
b = 7 % 7
c = a // b

# write a program that prints "three" four times
print("three", "three", "three")

print("two")
print("plus")
print("two)
print("makes")
print("four")
```

<details>
<summary> Solution</summary>

```python
# from top to bottom

c = a // b # runtime error - ZeroDivision

print("three", "three", "three") # logic error

print("two") # syntax error - missing parenthesis

```

</details>

---

## **Phase Three: Assessments**

Now, let's recap on what we learned.

> **Recap:** Head back to the lesson objectives and ask your student about each one. Spend time answering their questions and giving them feedback. You want to make sure they understand these core components before ending the lesson.

> **Discuss:** Let the student take control and ask any questions about any of the content that you covered.

Next week we are going to learn more about errors that can arise in our code. We are also going to cover booleans more in depth, and the kind of logic that we can perform with them coincidentally called boolean logic.
