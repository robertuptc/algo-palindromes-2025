import re, math

def palindrome(word):
    clean_word = re.sub(r"[^a-zA-Z0-9]", "", str(word).lower())
    
    first_half = ''
    second_half = ''

    if len(clean_word) % 2 != 0:
        half = math.floor(len(clean_word)/2)
        first_half = clean_word[0 : half]
        second_half = clean_word[half + 1 : ][::-1]
    else :
        half = int(len(clean_word) / 2)
        first_half = clean_word[0 : half]
        second_half = clean_word[half:][::-1]
    return True if first_half == second_half  else False

