import { NumContestantsOfEachGender } from "../constants";

const Grid = {
    getColumn: (index) => {
        return index % NumContestantsOfEachGender;
    },
    getRow: (index) => {
        return Math.floor(index / NumContestantsOfEachGender);
    }
}

export default Grid;
