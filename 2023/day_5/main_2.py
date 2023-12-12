import re

file = open("sample.txt").read()

items = file.split("\n\n")
seeds = re.findall(r"(\d+) (\d+)", items[0])
# convert to array of array of ints
seeds = list(map(lambda x: list(map(int, x)), seeds))

seed_list = []
for m in seeds:
    start, length = m
    for seed in range(start, start + length):
        seed_list.append({
            'origin': start,
            'seed': seed
        })

print(seed_list)

min_location = float("inf")
origin_seed = ''

for seed in seed_list:
    print(seed)
    print(seed.get('seed'))
    for item in items[1:]:
        for values in re.findall(r"(\d+) (\d+) (\d+)", item):
            destination, start, length = map(int, values)
            if seed.get('seed') in range(start, start + length):
                seed['seed'] += destination - start
                print(seed)
                break
    if min_location > seed.get('seed'):
        min_location = seed.get('seed')
        origin_seed = seed.get('origin')

print(origin_seed)
