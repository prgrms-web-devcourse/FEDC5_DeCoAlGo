import sys
input = sys.stdin.readline
answer = 0

n = int(input())
word = input().rstrip()
dic = {}
for w in word:
    if w in dic:
        dic[w] +=1
    else:
        dic[w] = 1
wordset = set(word)

for _ in range(n-1):
    word2 = input().rstrip()
    dic2 = {}
    for w2 in word2:
        if w2 in dic2:
            dic2[w2] +=1
        else:
            dic2[w2] =1
    wnotw2 = 0
    w2notw = 0
    for w in word:
        if w in dic2 and dic2[w] > 0:
            dic2[w] -=1
        else:
            wnotw2 +=1
    last = 0
    for d2 in dic2: 
        last += dic2[d2]
    if last <=1 and wnotw2 <=1:
        answer +=1

print(answer)