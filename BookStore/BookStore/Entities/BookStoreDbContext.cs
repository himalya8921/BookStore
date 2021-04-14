using System;
using BookStore.CustomEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookStore.Entities
{
    public partial class BookStoreDbContext : DbContext
    {
        public BookStoreDbContext()
        {
        }

        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BookComments> BookComments { get; set; }
        public virtual DbSet<Books> Books { get; set; }
        public virtual DbSet<UserBook> UserBook { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        public virtual DbSet<UserBookModel> UserBookModel { get; set; }
        public virtual DbSet<UserCommentModel> UserCommentModel { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-LI4AMOA3;Database=BookStoreDb;User Id=admin;Password=Admin@123456;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BookComments>(entity =>
            {
                entity.HasKey(e => e.BookCommentId)
                    .HasName("PK__BookComm__63644EDBB34B68AE");

                entity.Property(e => e.Comment)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Book)
                    .WithMany(p => p.BookComments)
                    .HasForeignKey(d => d.BookId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BookComme__BookI__440B1D61");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.BookComments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__BookComme__UserI__44FF419A");
            });

            modelBuilder.Entity<Books>(entity =>
            {
                entity.HasKey(e => e.BookId)
                    .HasName("PK__Books__3DE0C207BC6ED0F3");

                entity.Property(e => e.BookAuthor)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.BookImage).HasColumnType("image");

                entity.Property(e => e.BookName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.BookPrice).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.BookSummary)
                    .IsRequired()
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserBook>(entity =>
            {
                entity.HasOne(d => d.Book)
                    .WithMany(p => p.UserBook)
                    .HasForeignKey(d => d.BookId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserBook__BookId__403A8C7D");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserBook)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserBook__UserId__412EB0B6");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK_UserModel");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Role).HasDefaultValueSql("((0))");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });


            modelBuilder.Entity<UserBookModel>(entity => { });

            modelBuilder.Entity<UserCommentModel>(entity => { });
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
