function superbowlWin(record) {
    let result = record.find(record => record.result === 'W')
    let answer = result ? result.year : undefined
    return answer
    
    }
