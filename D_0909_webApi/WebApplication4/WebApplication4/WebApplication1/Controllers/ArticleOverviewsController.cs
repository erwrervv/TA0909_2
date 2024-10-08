﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleOverviewsController : ControllerBase
    {
        private readonly FinalContext _context;

        public ArticleOverviewsController(FinalContext context)
        {
            _context = context;
        }

        //------------tes------------------
        // GET: api/ArticleOverviews/GetPicture/5
        [HttpGet("GetPicture/{id}")]
        public async Task<IActionResult> GetPicture(int id)
        {
            var article = await _context.ArticleOverviews
                .FirstOrDefaultAsync(a => a.ArticleId == id);

            if (article == null || article.ArticleCoverImage == null)
            {
                return NotFound();
            }

            string mimeType = "image/png"; // 根據圖片後綴調整
            return File(article.ArticleCoverImage, mimeType);
        }
        //------------------------
        // GET: api/ArticleOverviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArticleOverview>>> GetArticleOverviews()
        {
            try
            {
                var articles = await _context.ArticleOverviews.ToListAsync();
                return Ok(articles); // 返回状态码 200 和 JSON 数据
            }
            catch (Exception ex)
            {
                // 記錄錯誤
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ArticleOverview>> GetArticleOverview(int id)
        {
            try
            {
                var articleOverview = await _context.ArticleOverviews.FindAsync(id);

                if (articleOverview == null)
                {
                    return NotFound();
                }

                return Ok(articleOverview); // 返回状态码 200 和 JSON 数据
            }
            catch (Exception ex)
            {
                // 记录异常
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }


        // PUT: api/ArticleOverviews/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArticleOverview(int id, ArticleOverview articleOverview)
        {
            if (id != articleOverview.ArticleId)
            {
                return BadRequest();
            }

            _context.Entry(articleOverview).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleOverviewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ArticleOverviews
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ArticleOverview>> PostArticleOverview(ArticleOverview articleOverview)
        {
            _context.ArticleOverviews.Add(articleOverview);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArticleOverview", new { id = articleOverview.ArticleId }, articleOverview);
        }

        // DELETE: api/ArticleOverviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticleOverview(int id)
        {
            var articleOverview = await _context.ArticleOverviews.FindAsync(id);
            if (articleOverview == null)
            {
                return NotFound();
            }

            _context.ArticleOverviews.Remove(articleOverview);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [NonAction]
        private bool ArticleOverviewExists(int id)
        {
            return _context.ArticleOverviews.Any(e => e.ArticleId == id);
        }
    }
}
