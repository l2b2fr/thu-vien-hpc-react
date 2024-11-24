import { TextField, Grid, Box, Typography } from "@mui/material";

function UserInfo({ user }) {
  return (
    <div className="w-full mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-[30px] font-bold text-color-text-light text-center">Thông tin người dùng</h1>

      <div className="w-full mt-5">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Mã người dùng"
              variant="outlined"
              value={user?.maNguoiDung || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Họ tên"
              variant="outlined"
              value={user?.tenNguoiDung || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Số điện thoại"
              variant="outlined"
              value={user?.phone || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Email"
              variant="outlined"
              value={user?.email || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Ngày sinh"
              variant="outlined"
              value={
                user?.ngaySinh
                  ? new Date(user.ngaySinh).toLocaleDateString()
                  : ""
              }
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Quê quán"
              variant="outlined"
              value={user?.queQuan || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Địa chỉ"
              variant="outlined"
              value={user?.diaChi || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Ghi chú"
              variant="outlined"
              value={user?.ghiChu || ""}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={user?.imageUrl || "default-avatar.jpg"}
              alt="User Avatar"
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ddd",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default UserInfo;
