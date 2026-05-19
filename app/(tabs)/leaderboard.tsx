import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LEADERBOARD = [
  { id: "1", name: "Maria G.", xp: 2840, flag: "🇧🇷", avatar: "🦊" },
  { id: "2", name: "Takeshi K.", xp: 2510, flag: "🇯🇵", avatar: "🐻" },
  { id: "3", name: "Sophie L.", xp: 2300, flag: "🇫🇷", avatar: "🦁" },
  { id: "4", name: "You", xp: 1980, flag: "🇮🇳", avatar: "🦅", isMe: true },
  { id: "5", name: "Carlos M.", xp: 1750, flag: "🇲🇽", avatar: "🐯" },
  { id: "6", name: "Priya S.", xp: 1600, flag: "🇮🇳", avatar: "🦋" },
  { id: "7", name: "Lena W.", xp: 1400, flag: "🇩🇪", avatar: "🐺" },
  { id: "8", name: "Omar A.", xp: 1200, flag: "🇦🇪", avatar: "🦉" },
  { id: "9", name: "Emma T.", xp: 980, flag: "🇬🇧", avatar: "🐸" },
  { id: "10", name: "Jin H.", xp: 750, flag: "🇰🇷", avatar: "🐼" },
];

const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

export default function LeaderboardScreen() {
  const top3 = LEADERBOARD.slice(0, 3);
  const rest = LEADERBOARD.slice(3);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <Text style={styles.headerSub}>Diamond League • 4 days left</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Podium */}
        <View style={styles.podiumContainer}>
          {/* 2nd */}
          <View style={[styles.podiumItem, styles.podium2]}>
            <Text style={styles.avatarLarge}>{top3[1].avatar}</Text>
            <Text style={styles.podiumName}>{top3[1].name}</Text>
            <View style={[styles.podiumBlock, { height: 60, backgroundColor: "#C0C0C0" }]}>
              <Text style={styles.podiumRank}>2</Text>
            </View>
          </View>

          {/* 1st */}
          <View style={[styles.podiumItem, styles.podium1]}>
            <Text style={styles.crownEmoji}>👑</Text>
            <Text style={[styles.avatarLarge, { fontSize: 46 }]}>{top3[0].avatar}</Text>
            <Text style={styles.podiumName}>{top3[0].name}</Text>
            <View style={[styles.podiumBlock, { height: 80, backgroundColor: "#FFD700" }]}>
              <Text style={styles.podiumRank}>1</Text>
            </View>
          </View>

          {/* 3rd */}
          <View style={[styles.podiumItem, styles.podium3]}>
            <Text style={styles.avatarLarge}>{top3[2].avatar}</Text>
            <Text style={styles.podiumName}>{top3[2].name}</Text>
            <View style={[styles.podiumBlock, { height: 44, backgroundColor: "#CD7F32" }]}>
              <Text style={styles.podiumRank}>3</Text>
            </View>
          </View>
        </View>

        {/* XP for top 3 */}
        <View style={styles.top3XP}>
          {top3.map((player, i) => (
            <View key={player.id} style={styles.xpChip}>
              <Ionicons name="flash" size={14} color="#FF9600" />
              <Text style={styles.xpChipText}>{player.xp.toLocaleString()}</Text>
            </View>
          ))}
        </View>

        {/* Rest of list */}
        <View style={styles.listContainer}>
          {rest.map((player, index) => (
            <View
              key={player.id}
              style={[styles.listItem, player.isMe && styles.listItemMe]}
            >
              <Text style={styles.rankNum}>{index + 4}</Text>
              <Text style={styles.listAvatar}>{player.avatar}</Text>
              <View style={styles.listInfo}>
                <View style={styles.nameRow}>
                  <Text style={[styles.listName, player.isMe && { color: "#1CB0F6", fontWeight: "900" }]}>
                    {player.name}
                  </Text>
                  <Text style={styles.listFlag}>{player.flag}</Text>
                </View>
                <View style={styles.xpRow}>
                  <Ionicons name="flash" size={14} color="#FF9600" />
                  <Text style={styles.listXP}>{player.xp.toLocaleString()} XP</Text>
                </View>
              </View>
              {player.isMe && (
                <View style={styles.youBadge}>
                  <Text style={styles.youBadgeText}>YOU</Text>
                </View>
              )}
            </View>
          ))}
        </View>

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
  headerTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#3C3C3C",
  },
  headerSub: {
    fontSize: 13,
    color: "#AFAFAF",
    fontWeight: "600",
    marginTop: 2,
  },
  podiumContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: 24,
    paddingHorizontal: 16,
    gap: 0,
  },
  podiumItem: {
    alignItems: "center",
    width: 110,
  },
  podium1: { marginBottom: 0 },
  podium2: { marginBottom: 0 },
  podium3: { marginBottom: 0 },
  crownEmoji: { fontSize: 28, marginBottom: 2 },
  avatarLarge: { fontSize: 38 },
  podiumName: {
    fontSize: 12,
    fontWeight: "700",
    color: "#3C3C3C",
    marginTop: 4,
    marginBottom: 4,
    textAlign: "center",
  },
  podiumBlock: {
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  podiumRank: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFFFFF",
    paddingVertical: 6,
  },
  top3XP: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 0,
    marginBottom: 16,
  },
  xpChip: {
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    paddingVertical: 6,
    backgroundColor: "#FFF9EC",
    borderWidth: 1,
    borderColor: "#FF9600",
    borderRadius: 8,
  },
  xpChipText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#FF9600",
  },
  listContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
    gap: 12,
  },
  listItemMe: {
    borderColor: "#1CB0F6",
    backgroundColor: "#EBF9FF",
  },
  rankNum: {
    fontSize: 16,
    fontWeight: "800",
    color: "#AFAFAF",
    width: 24,
    textAlign: "center",
  },
  listAvatar: { fontSize: 30 },
  listInfo: { flex: 1 },
  nameRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  listName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3C3C3C",
  },
  listFlag: { fontSize: 16 },
  xpRow: { flexDirection: "row", alignItems: "center", gap: 3, marginTop: 2 },
  listXP: { fontSize: 13, color: "#AFAFAF", fontWeight: "600" },
  youBadge: {
    backgroundColor: "#1CB0F6",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  youBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
});

