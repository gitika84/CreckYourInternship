function fullJustify(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (let word of words) {
        if (lineLength + word.length + line.length > maxWidth) {
            // Distribute spaces for the current line
            for (let i = 0; i < maxWidth - lineLength; i++) {
                line[i % (line.length - 1 || 1)] += ' ';
            }
            result.push(line.join(''));
            line = [];
            lineLength = 0;
        }
        line.push(word);
        lineLength += word.length;
    }

    // Last line: left-justified
    result.push(line.join(' ') + ' '.repeat(maxWidth - lineLength - line.length + 1));

    return result;
}

// Example Usage
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;

console.log(fullJustify(words, maxWidth));
