import re

regexNumber = re.compile(r'(\d+)')

originales = []
copies = []
total = 0

with open('input.txt') as f:
    originales = f.read().splitlines()


def play_game(line):
    global total
    total += 1
    game_info = line.split(': ')[0]
    game_number = re.findall(r'\d+', game_info)[0]
    game_data = line.split(': ')[1]

    winning_numbers = game_data.split('|')[0]
    playing_numbers = game_data.split('|')[1]
    # get array of numbers
    winning_numbers = regexNumber.findall(winning_numbers)
    playing_numbers = regexNumber.findall(playing_numbers)

    # for each number in playing_numbers, check if it is in winning_numbers
    result = 0
    for number in playing_numbers:
        if number in winning_numbers:
            result += 1

    if result == 0:
        return

    for i in range(result):
        print('adding card ' + str(int(game_number) + i))
        copies.append(originales[int(game_number) + i])


for line in originales:
    play_game(line)

for line in copies:
    play_game(line)

print(total)
