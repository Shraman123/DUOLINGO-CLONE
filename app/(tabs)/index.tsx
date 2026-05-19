import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useGameStore } from "../../store/gameStore";
import { UNITS } from "../../data/lessons";

export default function HomeScreen() {
  const router = useRouter();
  const { hearts, xp, streak } = useGameStore();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.flagContainer}>
          <Text style={styles.flagEmoji}>🇪🇸</Text>
          <Text style={styles.langText}>SPANISH</Text>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.streakFire}>🔥</Text>
            <Text style={styles.statValue}>{streak}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.gemIcon}>💎</Text>
            <Text style={styles.statValue}>{xp}</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="heart" size={22} color="#FF4B4B" />
            <Text style={styles.statValue}>{hearts}</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {UNITS.map((unit, unitIndex) => (
          <View key={unit.id} style={styles.unitContainer}>
            {/* Unit Header */}
            <View style={[styles.unitHeader, { backgroundColor: unit.color }]}>
              <Text style={styles.unitLabel}>UNIT {unitIndex + 1}</Text>
              <Text style={styles.unitTitle}>{unit.title}</Text>
            </View>

            {/* Lesson Nodes */}
            <View style={styles.nodesContainer}>
              {unit.lessons.map((lesson, lessonIndex) => {
                const isLocked = unit.locked;
                const isBoss = lessonIndex === unit.lessons.length - 1;

                return (
                  <View
                    key={lesson.id}
                    style={[
                      styles.nodeRow,
                      lessonIndex % 2 === 0 ? styles.nodeLeft : styles.nodeRight,
                    ]}
                  >
                    <TouchableOpacity
                      style={[
                        styles.lessonNode,
                        { backgroundColor: isLocked ? "#E5E5E5" : unit.color },
                        isBoss && styles.bossNode,
                      ]}
                      onPress={() => {
                        if (!isLocked) {
                          useGameStore.getState().setCurrentUnit(unit);
                          useGameStore.getState().startLesson(unit.lessons);
                          router.push(`/lesson/${unit.id}`);
                        }
                      }}
                      disabled={isLocked}
                    >
                      {isLocked ? (
                        <Ionicons name="lock-closed" size={28} color="#AFAFAF" />
                      ) : isBoss ? (
                        <Text style={styles.nodeEmoji}>🏆</Text>
                      ) : (
                        <Text style={styles.nodeEmoji}>⭐</Text>
                      )}
                    </TouchableOpacity>
                    {isLocked && (
                      <Text style={styles.lockedText}>Complete previous unit</Text>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#E5E5E5",
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  flagEmoji: {
    fontSize: 24,
  },
  langText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1CB0F6",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  streakFire: {
    fontSize: 22,
  },
  gemIcon: {
    fontSize: 22,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3C3C3C",
  },
  scroll: {
    paddingBottom: 20,
  },
  unitContainer: {
    marginBottom: 8,
  },
  unitHeader: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
  },
  unitLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgba(255,255,255,0.8)",
    letterSpacing: 1,
  },
  unitTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    marginTop: 2,
  },
  nodesContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  nodeRow: {
    marginVertical: 6,
    alignItems: "center",
  },
  nodeLeft: {
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  nodeRight: {
    alignSelf: "flex-end",
    marginRight: 40,
  },
  lessonNode: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderBottomWidth: 4,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  bossNode: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nodeEmoji: {
    fontSize: 30,
  },
  lockedText: {
    fontSize: 11,
    color: "#AFAFAF",
    marginTop: 4,
    fontWeight: "600",
  },
});
