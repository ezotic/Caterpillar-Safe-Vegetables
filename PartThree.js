
class PartThree {

    findYoungest(data){
        
        return data;
            let data = 
            `name, age, role
            Kaleb Burd, 24, Instructor
            Tariq Hook, 39, Co-Founder
            Harry Potter, 18, Student
            Gollum, 589, Student
            Bill Gates, 65, Student`;
        
        let rows = data.split("\n");

        for(let i = 1; i < rows.length; i++){
            rows[i] = rows[i].split(", ")
        }

        let youngest = -1;

        for(let i = 1; i < rows.length; i++){
            let age = Number(rows[i][1]);
            if(youngest < age){
                youngest = age;
            }
        }

    }

    findYoungest(data)

    findLongestName(data){
        return data;
    }

    findCoOwner(data){
        return data;
    }

    findStudents(data){
        return data;
    }

}

module.exports = PartThree;