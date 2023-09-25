def solution(numbers, hand):
    answer = ''
    left, right = [3,0], [3,2]
    def distance(x,y): #두 좌표 x,y 사이 거리 return
        return sum([abs(a-b) for a,b in zip(x,y)])
    
    centerdic = {
        2: [0,1],
        5: [1,1],
        8: [2,1],
        0: [3,1]
    }
    for n in numbers:
        if n in [1,4,7]:
            answer += 'L'
            left = [(n-1)//3, (n-1)%3]
        elif n in [3,6,9]:
            answer += 'R'
            right = [(n-1)//3, (n-1)%3]
        else:
            ld = distance(left, centerdic[n])
            rd = distance(right, centerdic[n])
            if ld <rd or (ld == rd and hand=='left'):
                answer += 'L'
                left = centerdic[n]
            elif ld > rd or (ld == rd and hand=='right'):
                answer += 'R'
                right = centerdic[n]
                
    return answer