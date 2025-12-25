#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <cmath>

struct ToolMove {
    std::string type;
    double x, y, z;
    double feed;
};

int main() {
    std::ifstream file("input.nc");
    std::string line;

    double cx = 0, cy = 0, cz = 0;
    double feed = 200;

    std::vector<ToolMove> moves;

    while (std::getline(file, line)) {
        std::stringstream ss(line);
        std::string word;
        ToolMove move;
        move.x = cx;
        move.y = cy;
        move.z = cz;
        move.feed = feed;

        while (ss >> word) {
            if (word[0] == 'G') move.type = word;
            if (word[0] == 'X') move.x = std::stod(word.substr(1));
            if (word[0] == 'Y') move.y = std::stod(word.substr(1));
            if (word[0] == 'Z') move.z = std::stod(word.substr(1));
            if (word[0] == 'F') move.feed = std::stod(word.substr(1));
        }

        cx = move.x;
        cy = move.y;
        cz = move.z;
        feed = move.feed;

        moves.push_back(move);
    }

    std::cout << "[";
    for (size_t i = 0; i < moves.size(); i++) {
        std::cout << "{";
        std::cout << "\"type\":\"" << moves[i].type << "\",";
        std::cout << "\"x\":" << moves[i].x << ",";
        std::cout << "\"y\":" << moves[i].y << ",";
        std::cout << "\"z\":" << moves[i].z << ",";
        std::cout << "\"feed\":" << moves[i].feed;
        std::cout << "}";
        if (i != moves.size() - 1) std::cout << ",";
    }
    std::cout << "]";
}

