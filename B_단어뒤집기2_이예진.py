import sys
input = sys.stdin.readline

## --2차 제출-- 48ms
str = input().rstrip()
str = str.split('>')
result = ''
for splited in str:
    if splited == '': continue #마지막 '>'
    opensplited = splited.split('<')    # ['', 'max'] / 마지막 분리는 ['9223372036854775807']
    if len(opensplited) == 1:
        spacesplit = opensplited[0].split(' ')
        result += ' '.join(ss[::-1] for ss in spacesplit)
        continue
    if opensplited[0] == '':
        result += '<' + opensplited[1] + '>'
    else: #단어<태그  인경우  opensplited: ['gat', 'close']
        spacesplit = opensplited[0].split(' ')
        result += ' '.join(ss[::-1] for ss in spacesplit)
        result += '<' + opensplited[1] + '>'

print(result)

## --1차 제출-- 276ms 
# str = input().rstrip()
# result = ''
# tag = False
# tagkeep = ''
# keep = ''
# for s in str:
#     if s == '<':
#         if keep:
#             keep = list(keep)
#             keep.reverse()
#             result+= ''.join(keep)
#             keep = ''
#         result += s
#         tag= True
#     elif s == '>':
#         result += tagkeep
#         result += s
#         tag = False
#     elif s == ' ':
#         if tag:
#             result += s
#             continue
#         if keep:
#             keep = list(keep)
#             keep.reverse()
#             result+= ''.join(keep)
#             result += ' '
#             keep = ''
#     else:
#         if tag:
#             result+=s
#         else:
#             keep +=s
# if keep:
#     keep = list(keep)
#     keep.reverse()
#     result+= ''.join(keep)
# print(result)




