import re

regexGreen = re.compile(r'(\d+) green')
regexBlue = re.compile(r'(\d+) blue')
regexRed = re.compile(r'(\d+) red')

with open('input.txt', 'r') as f:
    # read all lines
    lines = f.readlines()
    content = [x.strip() for x in lines]
    result = 0

    # get the game number
    for line in content:
        game_string = line.split(':')[0]
        game_number = re.findall(r'\d+', game_string)[0]

        plays = line.split(':')[1]
        # get each play
        plays = plays.split(';')

        minimumGreen = 0
        minimumBlue = 0
        minimumRed = 0

        for play in plays:
            # get the number of blue balls
            blueBalls = regexBlue.findall(play)
            if len(blueBalls) > 0:
                blueBalls = int(blueBalls[0])
            else:
                blueBalls = 1

            # get the number of green balls
            greenBalls = regexGreen.findall(play)
            if len(greenBalls) > 0:
                greenBalls = int(greenBalls[0])
            else:
                greenBalls = 1

            # get the number of red balls
            redBalls = regexRed.findall(play)
            if len(redBalls) > 0:
                redBalls = int(redBalls[0])
            else:
                redBalls = 1

            if minimumRed < redBalls:
                minimumRed = redBalls
            if minimumBlue < blueBalls:
                minimumBlue = blueBalls
            if minimumGreen < greenBalls:
                minimumGreen = greenBalls
        result += minimumRed * minimumBlue * minimumGreen
print(result)