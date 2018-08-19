import random as r
import argparse


def josh_it(word, strength):
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
