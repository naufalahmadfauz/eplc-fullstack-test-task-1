class Test {
    mergeSortArray(a, b) {
        let merged = [];
        let index = 0;

        for (let i = 0; i < a.length; i++) {
            merged[index] = a[i];
            index++;
        }

        for (let i = 0; i < b.length; i++) {
            merged[index] = b[i];
            index++;
        }

        let n = merged.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (merged[j] > merged[j + 1]) {
                    let temp = merged[j];
                    merged[j] = merged[j + 1];
                    merged[j + 1] = temp;
                }
            }
        }

        return merged;
    }

    getMissingData(arr) {
        if (arr.length < 2) return null;

        let prevDiff = arr[1] - arr[0];

        for (let i = 1; i < arr.length - 1; i++) {
            let currentNum = arr[i];
            let nextNum = arr[i + 1];
            let currentDiff = nextNum - currentNum;

            let expectedDiff = prevDiff + 1;

            if (currentDiff !== expectedDiff) {
                return currentNum + expectedDiff;
            }

            prevDiff = currentDiff;
        }
        return null;
    }

    insertMissingData(arr, missingData) {
        if (missingData === null) return arr;

        let newArr = [];
        let inserted = false;
        let newIndex = 0;

        for (let i = 0; i < arr.length; i++) {
            if (!inserted && arr[i] > missingData) {
                newArr[newIndex] = missingData;
                newIndex++;
                inserted = true;
            }

            newArr[newIndex] = arr[i];
            newIndex++;
        }

        if (!inserted) {
            newArr[newIndex] = missingData;
        }

        return newArr;
    }

    main() {
        const a = [11, 36, 65, 135, 98];
        const b = [];
        b[0] = 81;
        b[1] = 23;
        b[2] = 50;
        b[3] = 155;

        console.log("Array A:", a);
        console.log("Array B:", b);

        const c = this.mergeSortArray(a, b);
        console.log("Hasil mergeSortArray:", c);

        const i = this.getMissingData(c);
        console.log("Hasil getMissingData:", i);

        const d = this.insertMissingData(c, i);
        console.log("Hasil insertMissingData:", d);
    }
}

const t = new Test();
t.main();