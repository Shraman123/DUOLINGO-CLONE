import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useGameStore } from "../../store/gameStore";

const DAILY_QUESTS = [
  { id: "1", title: "Earn 10 XP", emoji: "⚡", current: 10, total: 10, done: true },
  { id: "2", title: "Complete a lesson", emoji: "📚", current: 1, total: 1, done: true },
  { id: "3", title: "Get 3 correct in a row", emoji: "🎯", current: 2, total: 3, done: false },
  { id: "4", title: "Practice for 5 minutes", emoji: "⏱️", current: 3, total: 5, done: false },
];

const WEEKLY_QUESTS = [
  { id: "5", title: "Earn 50 XP this week", emoji: "🌟", current: 30, total: 50, done: false },
  { id: "6", title: "Complete 5 lessons", emoji: "🏅", current: 1, total: 5, done: false },
  { id: "7", title: "Maintain a 7-day streak", emoji: "🔥", current: 7, total: 7, done: true },
];

export default function QuestsScreen() {
  const { xp, streak } = useGameStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quests</Text>
        <Text style={styles.headerSub}>Complete quests to earn bonus XP</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Streak Banner */}
        <View style={styles.streakBanner}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <View>
            <Text style={styles.streakTitle}>{streak}-Day Streak!</Text>
            <Text style={styles.streakSub}>Keep practicing daily to maintain it</Text>
          </View>
        </View>

        {/* Daily Quests */}
        <Text style={styles.sectionTitle}>Daily Quests</Text>
        {DAILY_QUESTS.map((quest) => {
          const pct = Math.min(quest.current / quest.total, 1);
          return (
            <View key={quest.id} style={[styles.questCard, quest.done && styles.questDone]}>
              <Text style={styles.questEmoji}>{quest.emoji}</Text>
              <View style={styles.questInfo}>
                <Text style={[styles.questTitle, quest.done && styles.questTitleDone]}>
                  {quest.title}
                </Text>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${pct * 100}%` }]} />
                </View>
                <Text style={styles.questProgress}>
                  {quest.current}/{quest.total}
                </Text>
              </View>
              {quest.done ? (
                <View style={styles.doneBadge}>
                  <Ionicons name="checkmark-circle" size={28} color="#58CC02" />
                </View>
              ) : (
                <View style={styles.xpReward}>
                  <Ionicons name="flash" size={14} color="#FF9600" />
                  <Text style={styles.xpRewardText}>+10</Text>
                </View>
              )}
            </View>
          );
        })}

        {/* Weekly Quests */}
        <Text style={styles.sectionTitle}>Weekly Quests</Text>
        {WEEKLY_QUESTS.map((quest) => {
          const pct = Math.min(quest.current / quest.total, 1);
          return (
            <View key={quest.id} style={[styles.questCard, quest.done && styles.questDone]}>
              <Text style={styles.questEmoji}>{quest.emoji}</Text>
              <View style={styles.questInfo}>
                <Text style={[styles.questTitle, quest.done && styles.questTitleDone]}>
                  {quest.title}
                </Text>
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${pct * 100}%`, backgroundColor: "#FF9600" },
                    ]}
                  />
                </View>
                <Text style={styles.questProgress}>
                  {quest.current}/{quest.total}
                </Text>
              </View>
              {quest.done ? (
                <View style={styles.doneBadge}>
                  <Ionicons name="checkmark-circle" size={28} color="#58CC02" />
                </View>
              ) : (
                <View style={styles.xpReward}>
                  <Ionicons name="flash" size={14} color="#FF9600" />
                  <Text style={styles.xpRewardText}>+50</Text>
                </View>
              )}
            </View>
          );
        })}

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#E5E5E5",
  },
  headerTitle: { fontSize: 22, fontWeight: "900", color: "#3C3C3C" },
  headerSub: { fontSize: 13, color: "#AFAFAF", fontWeight: "600", marginTop: 2 },
  scroll: { padding: 16, gap: 12 },
  streakBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF3E0",
    borderRadius: 16,
    padding: 16,
    gap: 14,
    borderWidth: 2,
    borderColor: "#FF9600",
    marginBottom: 8,
  },
  streakEmoji: { fontSize: 40 },
  streakTitle: { fontSize: 18, fontWeight: "800", color: "#FF9600" },
  streakSub: { fontSize: 13, color: "#AFAFAF", fontWeight: "600", marginTop: 2 },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#3C3C3C",
    marginTop: 8,
    marginBottom: 4,
  },
  questCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
    gap: 12,
  },
  questDone: {
    backgroundColor: "#F9FFF5",
    borderColor: "#B8F0A0",
  },
  questEmoji: { fontSize: 32 },
  questInfo: { flex: 1, gap: 6 },
  questTitle: { fontSize: 15, fontWeight: "700", color: "#3C3C3C" },
  questTitleDone: { color: "#58CC02" },
  progressTrack: {
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#58CC02",
    borderRadius: 4,
  },
  questProgress: { fontSize: 12, color: "#AFAFAF", fontWeight: "600" },
  doneBadge: {},
  xpReward: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: "#FFF9EC",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#FF9600",
  },
  xpRewardText: { fontSize: 13, fontWeight: "800", color: "#FF9600" },
});
