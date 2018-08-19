import random as r
import argparse

random = r.random()


def josh_it(word: '', strength: int):
    if word is None:
        print('[X] Word is null')
    else:
        length = len(word)
        letters = word.split(' ')
        for index in length:
            index += 1
            element = letters[index]
            if element == '' or element == ' ':
                continue
                if random <= strength:
                    randIndex = r.randint
                    temp = letters[index]
            letters[randIndex] = element
            letters[index] = temp
    return letters.join("").trim()


