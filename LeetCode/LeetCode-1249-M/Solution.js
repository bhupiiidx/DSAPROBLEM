/**
 * @param {string} s
 * @return {string}
 */
// ! Youyrs
var minRemoveToMakeValid = function (s) {
	let stck = [];
	let stck_top = 0;
	let str = "";
	for (let c of s) {
		if (c === "(" || c === ")") {
			if (stck.length === 0 && c === ")") {
				continue;
			} else if (stck.length >= 0 && c === "(") {
				str += c;
				stck.push("(");
				++stck_top;
			} else if (stck.length >= 0 && c === ")") {
				if (stck[stck_top - 1] === "(") {
					str += c;
					stck.pop();
					--stck_top;
				}
			}
		} else {
			str += c;
		}
	}
	return str;
};

console.log("lee(t(c)o)de) =>", minRemoveToMakeValid("lee(t(c)o)de)"));

console.log("a)b(c)d =>", minRemoveToMakeValid("a)b(c)d"));

console.log("))(( =>", minRemoveToMakeValid("))(("));

// ! ChatGPT
var minRemoveToMakeValid = function (s) {
	const stack = [];
	const remove = Array(s.length).fill(false);

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			stack.push(i);
		} else if (s[i] === ")") {
			if (stack.length === 0) {
				remove[i] = true;
			} else {
				stack.pop();
			}
		}
	}

	while (stack.length > 0) {
		remove[stack.pop()] = true;
	}

	let result = "";
	for (let i = 0; i < s.length; i++) {
		if (!remove[i]) {
			result += s[i];
		}
	}

	return result;
};

// Example usage
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")); // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))((")); // Output: ""
