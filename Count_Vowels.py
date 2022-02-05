END = "\033[0m"
Blue = "\033[0;34m"
# function will count number of Vowels in word or sentence inputted
def count_vowels(string):
    count = 0
    i = -1
    while i != len(string) - 1:
        i += 1
        string[i]
        if string[i] == "a":
            count = count + 1
        if string[i] == "e":
            count = count + 1
        if string[i] == "i":
            count = count + 1
        if string[i] == "o":
            count = count + 1
        if string[i] == "u":
            count = count + 1
    count = str(count)
    print("There are " + Blue + count + END + " vowels in your word or sentence")


# prompts user to enter a word or sentence to count
input = input("Enter a word of sentence, and I will count number of vowels:")
(count_vowels(input))
