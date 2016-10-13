fileObj = open("words.txt")
array = []
for word in fileObj:
	array.append(word.rstrip())
fileObj.close()
final = "var words = ["
for element in array:
	final += "\"" + element + "\","
final = final[:-1]
final += "]"
fileOut = open("output.js", "w")
fileOut.write(final)
fileOut.close()
