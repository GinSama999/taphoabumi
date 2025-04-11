import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function RetinolProductPage() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-10 text-gray-800">
      <div className="max-w-4xl mx-auto grid gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Retinol Hữu Cơ - Dịu Nhẹ Cho Da Nhạy Cảm
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Card className="rounded-2xl shadow-md">
            <CardContent className="grid md:grid-cols-2 gap-6 p-4 md:p-6">
              <img
                src="/retinol.jpg"
                alt="Retinol hữu cơ"
                className="rounded-xl w-full h-auto object-cover"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Serum Retinol Hữu Cơ Dịu Nhẹ
                </h2>
                <p>
                  Dành cho da nhạy cảm, không gây bong tróc, kích ứng. Chất serum
                  nhẹ, thẩm thấu nhanh, hỗ trợ giảm mụn ẩn, làm mịn da và mờ thâm.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Không cồn, không hương liệu</li>
                  <li>Thích hợp với mọi loại da, kể cả da yếu</li>
                  <li>Hiệu quả rõ rệt sau 2 tuần</li>
                </ul>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-2">
                    Mua tại đây
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gray-50 rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-2">Chia sẻ người dùng</h3>
          <p>
            “Da mình cực kỳ nhạy cảm, nhưng sau 2 tuần dùng retinol hữu cơ này, da
            dịu hẳn, mịn hơn rõ rệt và không hề bong tróc. Quá bất ngờ luôn!” – Mai, 26 tuổi.
          </p>
        </motion.div>
      </div>
    </div>
  );
}