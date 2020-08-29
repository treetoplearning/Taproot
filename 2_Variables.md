# **Lesson 2 - Variables**

Variables. Data Types. Strings. Assignment. Equality. Combining different types of variables.

## Description

The following lesson introduces the concepts of variables, data types, and basic variable comparison.

## Introduction

After you welcome the student back, you should spend a few minutes discussing any new questions they may have about the content or curriculum, as well as if they had any concerns about any excercises they were working on at home.

## **Phase One: Objectives**

- [ ] The student understands what variables are and how to create them.

- [ ] The student understands that variables are used to store data, and data types dictate the type of data stored in a variable.

- [ ] The student is able to assign different values to a variable and is able run basic checks on value of a variable.

- [ ] The student understands that a string is a datatype. The students also understands that strings can be combined through a process called "string concatentaion."
  
- [ ] The student understands that they can perform many operations on their variables. These operations include but are not limited to adding integers, concatenating strings, and checking whether a boolean is true.

## **Phase Two: Activities**

Last week we were introduced to what coding was, and the process that the code we write becomes instructions to be followed by the computer. This week we are going to dive even deeper and learn about some more tools that coders use write programs. You'll recall that last week we talked about **<ins>variables</ins>**, which are a way to assign persistent values, so those values can be referenced later. Let's get right into some excercises so we can learn more.

- _Why do you think it might be useful to be able to reference an already-known computer value at different points while coding?_ It saves us time from recomputing known values and makes our code shorter and simpler.

> **Tip:** This lesson will contain lots of specific content. Make sure to be copying and pasting examples or explanations to the IDE so the student can follow along.

Creating variables in Python is as simple as taking a name and assigning it a value. In Python, we use an assignment operator to assign a variable a value. There are three simple steps to creating a variable, and we'll go through them together.

```python
# Create a variable called 'age' that is equal to 100

age = 100
```

As a quick side note, variables generally should always start with a letter of the alphabet or an underscore. Also, in Python, would use a casing called **<ins>snake-case</ins>** for variable names where things that we name in our code are only named with lowercase letters and underscores. A good way to remember to use underscores and lowercase in snake case is to think of a snake, small and low to the ground. I have a few examples for you here:

```python
# Examples of snake case

my_age = 19
my_favorite_state = 'New York'
is_a_cheerleader = True
```

Now it's important to know that all variables aren't similar. Programmers have different types of variables, or data, to distinguish and group similar information. Different datatypes can do different things like integers for doing math, or strings for writing sentences. In Python there are many data types, but we are just going to focus on three. The first is an integer, or an *int*. Integers, are whole numbers that can be either positive or negative, and are used to perform computations and keep track of numerical values. Next, we have strings, or as they are commonly abbreviates *str*. Strings are sequences of individual characters strings, often referred to as characters, or chars. Strings can be words, or sentences, or unique characters on your keyboard. To make a string you just surround some words or symbosl with quotes or apostrophes, but I think apostrophes, also known as ticks, look the best. The final datatype that we are going to learn about is a boolean. Boolean variables are variables that either have a true or false value. Like *is_raining* or *has_icecream*. Booleans, or *bools*, typically start with a verb that expresses some condition. Between those three basic datatypes, we are going to have plenty of tools to do some pretty cool programming. But, before we get started with our excercise I have a couple questions for you.

- _First, why do you think we have different datatypes for our variables? Why don't we just have one datatype for everything?_ When it comes time for the computer to execute our code instructions, the data type tells the computer how we are going to use that variable. If we are adding to variables, and they are integers, then we want to get a sum out of it. Also, datatypes help keep our code easy to read, and allow us to perform computations on our data that we will cover in just a second.

- _Can you name some things around the house or in your life that are booleans?_ Examples: *is_raining*, *contains_nuts*, *has_freckles*

Now let's get some practice.

---
### **Excercise 1: Printing Variables**
---

We've learned that all it takes is an identifier, or the name that we use to refer to the variable, the assignment operator, and a value for the variable.

We can even combine some of the knowledge that we learned last week with our *print* statement. To print variables just put their names in a print statement. To print multiple variables, just put a comma between the variable names.


Now let's get some practice of our own.

```python
# Create 5 variables about yourself using all 3 variables types we have learned so far: int's, str's, and bool's. Then, print all of your variables together in a complete sentence with the print statement.

# Hint: To combine variables and strings inside of a print use commas.
```

<details>
<summary> Solution</summary>

```python
name = 'Jessica'
age = 14
favorite_color = "purple"
is_soccer_player = True
soccer_number = 7

print('My name is', name, 'I am', age, 'years old. My favorite color is', favorite_color,'and it is', is_soccer_player, 'that I am a soccer player. My favorite number is', soccer_number,'.')

# My name is Jessica I am 14 years old. My favorite color is purple and it is True that I am a soccer player. My favorite number is 7. 
```

</details>

</details>
<br>

> **Tip:** Let the student experiment on their own and fail with spacing. Coach them through it, and encourage them to try out different combinations of all three datatypes we have learned about.

Now that we know how to define variables and use them in print statements, it brings up an important question... What happens if we want to change the values of our variables? Luckily for us, Python allows us to change our variable values. All we have to do is change the value to the right of the assignment operator like so.

```python
# Change the variable overdue_books from 5 to 3.

overdue_books = 5

overdue_books = 3
```

When dealing with assignments like these, an easy way to think of the statement is "the left side should not refer to whatever value the right side is."

Python is special in the fact that you can change the value of almost any variable to any type at anytime (we'll learn about some specific off-cases next time).

- _Why do you think could be some consequences of being able to change our variable types?_ Due to the fact we can change our variable names, our programs are much more susceptible to bugs. Imagine we were writing a program to bake a cake, and we had variables called *eggs* and *choccolate_chips* to keep track of our recipe. If one of these variables types were changes, say the value of *eggs* was changed to True, adding these variables to find the total number of ingredients could lead to some unintended consequences, and in larger programs this problem can be even worse. In Python, we need to make sure we are certain when we change variable values or types, in order to avoid bugs in our code.

---

We haven't touched much on booleans, so let's learn a little more about them. While we can print strings and add integers, we haven't learned much about what we can do with booleans. Most values in Python have an inherent False or True value. You can compare values and see if their True or False values are the same with the "==" operator which is one of the **<ins>comparison operators</ins>**.

> **Focus:** It is much more important for the student to understand the function of each operator rather than the type of operator it is.

Here's an example of "==" operator:

```python
# Write a program that print if True is equal to False

print(True == False)  # prints False
```

The "==" operator can also be used to check other booleans like if strings equal each other. Just compare two strings like you would two booleans.

---
### **Excercise 2: String Concatenation**
---

Finally, let's cover some ways we can combine the variables that we have learned about.

So far with integers we know that we can add, but that isn't the only way we can combine different variables. One very important way that we can combine strings is through a process of **<ins>string concatenation</ins>**. This is when we join two strings end-to-end to stick them together to become one string.

Let's get some practice.

```python
# Solve the following puzzles

# Create a single new variable from the following variables in alphabetic order, then print out that new word (make sure to add spaces)

word1 = "pineapple"
word2 = "squash"
word3 = "grapefruit"
word4 = "pumpkin"

# Write a program that prints whether your new word is equal to target_word, and if not, change word5 so the print returns True

target_word = "applegrapeplumapricot"
```

<details>
<summary> Solution</summary>

```python
new_word = word3 + " " + word1 + " " + word4 + " " + word2

target_word = "grapefruit pineapple pumpkin squash"
```

</details>

</details>
<br>

## **Phase Three: Assessments**

Now, let's recap on what we learned.

> **Recap:** Head back to the lesson objectives and ask your student about each one. Spend time answering their questions and giving them feedback. You want to make sure they understand these core components before ending the lesson.

> **Discuss:** Let the student take control and ask any questions about any of the content that you covered.

Next week we are going to dive deeper into our exploration of datatypes, to learn more about the commputations we can do with integers. We'll also cover some fundamental programming mathematical procedures, and learn about errors, and how they arise in programming.
